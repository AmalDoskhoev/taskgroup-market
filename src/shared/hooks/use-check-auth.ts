import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  selectLoading,
  selectSetLoading,
  selectSetUserData,
  useUserStore
} from '@/app/stores/auth';
import { routes } from '@/shared';

interface ReturnProps {
  isLoading: boolean;
}

/**
 * Хук для проверки авторизации
 *
 * @return {object} Возвращает объект с логикой авторизации
 */
export const useCheckAuth = (): ReturnProps => {
  const navigate = useNavigate();
  const location = useLocation();

  const setLoading = useUserStore(selectSetLoading);
  const setUserData = useUserStore(selectSetUserData);
  const isLoading = useUserStore(selectLoading);
  const isAuthRoute = location.pathname.includes('auth');
  const hasToken = localStorage.getItem('token');

  const stopLoading = () => {
    // Костыль, чтобы дожидатьбся редиректа
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  async function checkAuth() {
    try {
      // Запрашиваем данные пользователя
      const data = {
        id: 1,
        name: 'Admin'
      };

      // Сохраняем данные в хранилище, если запрос выполнился успешно
      setUserData(data);

      // Если посетитель в любом роуте auth, то перенаправляем на ленту
      if (isAuthRoute) {
        navigate(routes.shop);
      }
    } catch (error) {
      // Редирект на форму авторизации, если пользователь не авторизован и удаление токена
      navigate(routes.login);
      localStorage.removeItem('token');
    } finally {
      // Завершаем загрузку
      stopLoading();
    }
  }

  React.useEffect(() => {
    // Если есть токен, делаем запрос на проверку авторизации
    if (hasToken) {
      checkAuth();
      return;
    }

    // Если человек вне роута "auth", то делаем редирект на логин
    if (!isAuthRoute) {
      navigate(routes.login);
    }

    stopLoading();
  }, []);

  return { isLoading };
};

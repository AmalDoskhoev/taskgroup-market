import { useLayoutEffect } from 'react';
import { COLORS } from 'ui-kit';

/**
 * Хук применяет цвета из ui-kit (файла colors.ts) на страницу в виде CSS-переменных
 *
 * @return {void} No return value.
 */
export const useInjectColors = (): void => {
  useLayoutEffect(() => {
    for (const key in COLORS) {
      const newKey = key.replace(/_/g, '-');
      document.documentElement.style.setProperty(`--${newKey}`, COLORS[key]);
    }
  }, []);
};

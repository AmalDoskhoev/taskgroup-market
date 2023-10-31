import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.min.css';

import { ToastContainer } from 'react-toastify';

import { LoginPage, Routing } from '@/pages';
import { useInjectColors } from '@/shared/hooks';
// import { LoginPage, Routing } from '@/pages';
// import { useCheckAuth, useInjectColors } from '@/shared/hooks';
// import { AppLoader } from '@/shared/ui';

export const App = () => {
  console.log(2);

  // const { isLoading } = useCheckAuth();

  useInjectColors();

  return (
    <div className="h-screen">
      {/* <AppLoader visible={isLoading} /> */}
      <LoginPage />
      <Routing />
      {/* {!isLoading && <Routing />} */}
      <ToastContainer />
    </div>
  );
};

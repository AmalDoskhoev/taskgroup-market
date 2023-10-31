import {
  toast as reactToast,
  type ToastPosition,
  type TypeOptions
} from 'react-toastify';

interface Props {
  message: string;
  closeBtn?: boolean;
  position?: ToastPosition;
  type?: TypeOptions;
  duration?: number;
}

export const notification = ({
  message,
  position = reactToast.POSITION.BOTTOM_LEFT,
  type = reactToast.TYPE.INFO,
  closeBtn = true,
  duration = 5000
}: Props) => {
  const options = {
    autoClose: duration,
    closeButton: closeBtn,
    hideProgressBar: false,
    type,
    position
  };

  reactToast(message, options);
};

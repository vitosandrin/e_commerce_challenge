import { useEffect } from "react";
import * as ToastContainerStyles from "./styles";

interface ToastMessageProps {
  message: string;
  onClose: () => void;
}

export const ToastMessage = ({ message, onClose }: ToastMessageProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <ToastContainerStyles.Container>{message}</ToastContainerStyles.Container>
  );
};

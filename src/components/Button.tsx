"use client";

import { Icon } from "@iconify/react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  success?: boolean;
  className?: string;
}

const Button = ({
  onClick,
  label,
  icon,
  isLoading,
  success,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`py-2 text-lg rounded-full px-5 flex transition duration-500 items-center gap-2 ${className}`}
      onClick={onClick}
    >
      {label}{" "}
      {isLoading ? (
        <Icon icon="line-md:loading-twotone-loop" fontSize={35} />
      ) : success ? (
        <Icon icon="line-md:check-all" fontSize={35} />
      ) : (
        icon
      )}
    </button>
  );
};

export default Button;

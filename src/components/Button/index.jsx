import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};

const variants = {
  gradient: {
    linear_1_indigo_900: "bg-gradient2 text-primary_colors-white_1",
  },
  fill: {
    custom: "bg-[#1B1F24]", // Updated color
  },
};

const sizes = {
  xs: "h-[52px] px-5 text-[20px]",
  sm: "h-[56px] px-3",
  md: "h-[64px] px-3",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "custom", // Default to the updated color
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[12px] ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf(["linear_1_indigo_900", "custom"]), // Updated color
};

export { Button };

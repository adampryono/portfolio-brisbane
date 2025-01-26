import React from "react";

const sizes = {
  body_b2: "font-inter text-[16px] font-bold",
  texts: "text-[20px] font-medium",
  headingsx: "text-[22px] font-semibold",
  headings: "text-[24px] font-bold md:text-[22px]",
  headingg: "text-[32px] font-bold md:text-[30px] sm:text-[28px]",
  headinglg: "text-[48px] font-bold md:text-[44px] sm:text-[38px]",
};

const Heading = ({ children, className = "", size = "headingsx", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-primary_colors-white_1 font-plusjakartasans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };

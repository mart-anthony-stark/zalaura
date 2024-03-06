import React, { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode;
    className?: string;
    onClick: ()=>void;
}

const Button = ({ children, className,...props }: ButtonProps) => {
  return (
    <button {...props} className={`cursor-pointer select-none bg-black p-2 text-white m-auto w-fit ${className}`}>{children}</button>
  )
}

export default Button
import React, { ButtonHTMLAttributes } from "react";

export function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className="px-4 py-2 bg-blue-500 text-white rounded">
      {children}
    </button>
  );
}

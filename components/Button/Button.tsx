import React from 'react'

type ButtonProps = {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => (
  <button
    className="flex flex-row items-center rounded-lg border-2 border-gray-200
   py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
  >
    {children}
  </button>
)

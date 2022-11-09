import React from 'react';
import { Switch as SwitchA } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Button = ({ 
  checked, onChange 
}) => {
  return (
    <SwitchA 
      checked={checked}
      onChange={onChange}
      className={`${checked ? 'bg-teal-900' : 'bg-teal-700'}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
    </SwitchA>
  );
};

export default Button;

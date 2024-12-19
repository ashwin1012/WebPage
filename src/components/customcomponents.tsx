import React, { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const CustomInput: React.FC<InputProps> = ({ value, placeholder = '', onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default CustomInput;

import { InputHTMLAttributes } from 'react';
import './inputs.css';

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
}

export function TextInput({ value, onChange, ...props }: TextInputProps) {
  return (
    <input
      type="text"
      className="text-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  );
}

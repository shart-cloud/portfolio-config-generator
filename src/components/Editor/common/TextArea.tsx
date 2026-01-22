import { TextareaHTMLAttributes } from 'react';
import './inputs.css';

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
}

export function TextArea({ value, onChange, ...props }: TextAreaProps) {
  return (
    <textarea
      className="text-area"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  );
}

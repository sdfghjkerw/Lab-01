import { memo } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

// memo обязателен, иначе useCallback в родителе не имеет смысла
export const Button = memo(function Button({ onClick, label }: ButtonProps) {
  console.log(`Button "${label}" render`);
  return <button onClick={onClick} style={{ margin: '5px' }}>{label}</button>;
});
import { useState } from "react";

interface MyButtonProps {
  title: string;
  name: string;
  disabled?: boolean;
}
function MyButton({ title, name, disabled }: MyButtonProps) {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <button disabled={disabled}>
      {title} {name}
    </button>
  );
}

export default MyButton;

import { ButtonHTMLAttributes } from "react";
import { Button as ButtonContainer } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: "PRIMARY" | "SECONDARY" | "TERTIARY";
  cursor?: "default" | "wait" | "move" | "not-allowed";
  placeholder: string;
  icon?: JSX.Element;
  animation?: boolean;
  hover?: boolean;
  focus?: boolean;
}

export function Button({
  typeButton = "PRIMARY",
  cursor = "default",
  animation = false,
  icon,
  placeholder,
  hover = false,
  focus = false,
  ...rest
}: ButtonProps) {
  return (
    // <button
    //   className={`border-white focus:border-[2px] cursor-${cursor} disabled:opacity-50 px-6 py-3 rounded-3xl flex gap-2 text-white bg-${color} `}
    // >
    //   <div className={animation ? "animate-spin" : ""}>{icon}</div>
    //   <p className="font-roboto font-medium text-sm">{placeholder}</p>
    // </button>
    <ButtonContainer typeButton={typeButton} cursor={cursor} {...rest} hover={hover} focus={focus}>
      {icon ? (
        <div className={animation ? "animate-spin" : ""}>{icon}</div>
      ): <></>}
      <p className="font-inter font-medium text-sm">{placeholder}</p>
    </ButtonContainer>
  );
}

// bg-${type === 'SECONDARY' ? '[#3C3748]' : type === 'TERTIARY' ? 'transparent' : '[#8257E5]'}

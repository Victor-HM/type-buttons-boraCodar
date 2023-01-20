import { ColumnStyle } from "./Column.style";

interface ColumnProps {
  placeholder?: string;
  children?: JSX.Element;
  background?: string
}

export function Column({ placeholder, children, background }: ColumnProps) {
  return (
    <ColumnStyle background={background}>
      <p className="font-roboto text-xs">{placeholder}</p>
      {children}
    </ColumnStyle>
  );
}

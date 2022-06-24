import { TitleText } from "components/Title/styles";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <TitleText>{title}</TitleText>;
}

// export default Title;

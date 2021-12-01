import { CardWrapper } from "./styled";

const Card = ({ children, padding }) => {
  return <CardWrapper padding={padding}>{children}</CardWrapper>;
};

export default Card;

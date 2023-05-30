import Alert from "react-bootstrap/Alert";

type Props = {
  variant?: string;
  children: React.ReactNode;
};
const MessageBox = ({ variant = "info", children }: Props) => {
  return <Alert variant={variant || "info"}>{children}</Alert>;
};

export default MessageBox;

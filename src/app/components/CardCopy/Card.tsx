import "./Card.scss";

export default function Card({
  children,
}: Readonly<{ children?: React.ReactNode; key?: string | number }>) {
  return <div className="cardCopy">{children}</div>;
}

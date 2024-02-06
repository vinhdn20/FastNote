import "../Content/navbary.css";

export default function NavBarY(props) {
  const text = props.text;
  const Icon = props.icon;
  const link = props.link;
  return (
    <div className="navbar">
      <a href={link}>
        <Icon />
        <span>{text}</span>
      </a>
    </div>
  );
}

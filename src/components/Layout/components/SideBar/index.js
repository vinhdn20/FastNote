import "./Content";
import Allnote from "./JS/Allnote";
import Logo from "./JS/Logo";
import Trash from "./JS/trash";
import Home from "./JS/Home";

export default function SideBar() {
  return (
    <div className="SideBar">
      <Logo />
      <Home />
      <Allnote />
      <Trash />
    </div>
  );
}

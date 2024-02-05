import "../Content/logo.css";
import "../Content/allnote.css";
import "../Content/sidebar.css";
import "../Content/trash.css";
import "../Content/home.css";
import Allnote from "./Allnote";
import Logo from "./Logo";
import Trash from "./trash";
import Home from "./Home";

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

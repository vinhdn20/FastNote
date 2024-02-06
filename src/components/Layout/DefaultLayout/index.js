import SideBar from "../components/SideBar";
import "./home.css";

function DefaultLayout({ children }) {
  return (
    <div class="container">
      <div class="left-div">
        <SideBar />
      </div>
      <div class="content">{children}</div>
    </div>
  );
}

export default DefaultLayout;

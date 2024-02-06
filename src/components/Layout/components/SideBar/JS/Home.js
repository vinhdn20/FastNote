import { HomeIcon } from "@radix-ui/react-icons";
import NavBarY from "../../../../NavBar/JS/NavBarY";

export default function Home() {
  return (
    <div className="home">
      <NavBarY icon={HomeIcon} text={"Home"} link={"/"} />
    </div>
  );
}

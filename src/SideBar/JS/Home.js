import { HomeIcon } from "@radix-ui/react-icons";
import NavBarY from "../../Common/JS/NavBarY";

export default function Home() {
  return (
    <div className="home">
      <NavBarY icon={HomeIcon} text={"Home"} link={"#"} />
    </div>
  );
}

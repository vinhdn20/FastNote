import { TrashIcon } from "@radix-ui/react-icons";
import NavBarY from "../../Common/JS/NavBarY";

export default Trash;
function Trash() {
  return (
    <div className="trash">
      <NavBarY icon={TrashIcon} text={"Trash"} link={"#"} />
    </div>
  );
}

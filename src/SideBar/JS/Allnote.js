import NavBarY from "../../Common/JS/NavBarY";

export default Allnote;

function Allnote() {
  return (
    <div className="allnote">
      <NavBarY icon={FolderIcon} text={"All Notes"} link={"#"} />
    </div>
  );
}

function FolderIcon(props) {
  return (
    <svg
      className="allnoteIcon"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  );
}

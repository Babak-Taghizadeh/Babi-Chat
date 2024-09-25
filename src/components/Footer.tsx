import { ChatBubbleIcon, DotsHorizontalIcon, PersonIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full border-t bg-background border-primary rounded-t-md flex justify-between items-center fixed bottom-0 left-0 px-10 py-2">
      <Link className="p-3" to="/contacts"><PersonIcon className="w-7 h-7" /></Link>
      <Link className="p-3" to="/chats"><ChatBubbleIcon className="w-7 h-7" /></Link>
      <Link className="p-3" to="/settings"><DotsHorizontalIcon className="w-7 h-7" /></Link>
    </div>
  );
};

export default Footer;

import { ChatBubbleIcon, DotsHorizontalIcon, PersonIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full border-t border-primary rounded-t-xl flex justify-between items-center fixed bottom-0 px-4">
      <Link className="p-5" to="#"><PersonIcon className="w-10 h-10" /></Link>
      <Link className="p-5" to="/chats"><ChatBubbleIcon className="w-10 h-10" /></Link>
      <Link className="p-5" to="#"><DotsHorizontalIcon className="w-10 h-10" /></Link>
    </div>
  );
};

export default Footer;

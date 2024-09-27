import { ChevronLeftIcon, MagnifyingGlassIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex gap-4">
        <Button className="bg-background hover:bg-secondary" size="icon">
          <ChevronLeftIcon className="icons-md" />
        </Button>
        <h1 className="text-2xl font-bold">Chats</h1>
      </div>
      <div className="flex gap-2">
      <Button className="bg-background hover:bg-secondary" size="icon"><MagnifyingGlassIcon className="icons-md" /></Button>
      <Button className="bg-background hover:bg-secondary" size="icon"><HamburgerMenuIcon className="icons-md" /></Button>
      </div>
    </header>
  );
};

export default ChatHeader;

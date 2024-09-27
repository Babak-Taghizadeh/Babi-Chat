import Navigation from "@/components/Navigation";
import { Card, CardImage, CardContent, CardInfo } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chats } from "@/dummy-data/chats.";
import { PaperPlaneIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"; 

const ChatsPage = () => {
  return (
    <div className="min-h-dvh pb-20 flex flex-col gap-10 px-5 py-6 overflow-y-auto">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Chats</h1>
        <Button size="icon"><PaperPlaneIcon /></Button>
      </header>
      <div className="chats-wrapper flex flex-col divide-y divide-secondary">
        <div className="w-fit self-center relative mb-4">
          <MagnifyingGlassIcon className="text-popover w-6 h-6 absolute left-2 top-2" />
          <Input
            placeholder="Search ..."
            className="w-72 pl-10 self-center border-popover"
          />
        </div>
        {chats.map((chat, index) => {
          return (
            <Card key={index}>
              <CardImage src={chat.pic} />
              <CardContent title={chat.name} desc={chat.msg} />
              <CardInfo lastMsg={chat.lastMsg} newMsgCount={chat.newMsg} />
            </Card>
          );
        })}
      </div>
      <Navigation />
    </div>
  );
};

export default ChatsPage;

import Footer from "@/components/Footer";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contacts } from "@/dummy-data/contacts";
import { PlusIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

const ContactsPage = () => {
  return (
    <div className="min-h-dvh pb-20 flex flex-col gap-10 px-5 py-4 overflow-y-auto">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Contacts</h1>
        <Button size="icon"><PlusIcon /></Button>
      </header>
      <div className="chats-wrapper flex flex-col divide-y divide-secondary">
        <div className="w-fit self-center relative mb-4">
          <MagnifyingGlassIcon className="text-popover w-6 h-6 absolute left-2 top-2" />
          <Input
            placeholder="Search ..."
            className="w-72 pl-10 self-center border-popover"
          />
        </div>
        {contacts.map((contact, index) => {
          return (
            <Card key={index}>
              <CardImage src={contact.pic} />
              <CardContent title={contact.name} desc={contact.lastSeen} />
            </Card>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ContactsPage;

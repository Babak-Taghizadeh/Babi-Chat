import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Chats = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <h1>chats</h1>
      <div>
        <Card>
          <CardHeader className="flex-row items-center">
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Chats;

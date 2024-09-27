import { ArrowUpIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import useAutosizeTextArea from "@/hooks/useAutosizeTextArea";
import { useRef, useState } from "react";
import { throttle } from "lodash";

const ChatInputBtn = () => {
  const [msgValue, setMsgValue] = useState<string>("");
  const textReaRef = useRef<HTMLTextAreaElement>(null);

  const throttledHandleChange = useRef(
    throttle((value: string) => {
      setMsgValue(value);
    }, 100) // 100ms interval
  ).current;

  useAutosizeTextArea(textReaRef.current, msgValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target?.value;
    throttledHandleChange(val);
  };
  return (
    <div className="w-full border-t bg-background border-primary rounded-t-md flex gap-4 items-end justify-center fixed bottom-0 left-0 px-6 py-4 pb-5">
      <Button className="bg-background hover:bg-secondary" size="icon">
        <PlusCircledIcon className="icons-md" />
      </Button>
      <Textarea onChange={handleChange} ref={textReaRef} value={msgValue} placeholder="Type a message" rows={1} />
      <Button size="icon">
        <ArrowUpIcon className="icons-md !text-background" />
      </Button>
    </div>
  );
};

export default ChatInputBtn;

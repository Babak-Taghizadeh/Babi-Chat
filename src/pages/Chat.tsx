import ChatHeader from "@/components/chat-ui/ChatHeader"
import ChatInputBtn from "@/components/chat-ui/ChatInputBtn"

const ChatPage = () => {
  return (
    <div className="min-h-dvh pb-20 flex flex-col gap-10 px-5 py-6 overflow-y-auto">
        <ChatHeader />
        <ChatInputBtn />
    </div>
  )
}

export default ChatPage
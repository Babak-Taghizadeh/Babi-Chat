interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardImageProps {
  src: string;
  className?: string;
}

interface CardContentProps {
  className?: string;
  title: string;
  desc: string;
}

interface CardInfoProps {
  className?: string;
  lastMsg: string;
  newMsgCount: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`flex gap-3 py-3 ${className}`}>
    {children}
    </div>;
};

const CardImage: React.FC<CardImageProps> = ({src, className = ""}) => {
  return (
      <img className={`h-14 w-14 rounded-2xl ${className}`} src={src} alt="User Avatar" />
  );
};

const CardContent: React.FC<CardContentProps> = ({className = "", title, desc}) => {
  return (
    <div className={`flex flex-col justify-between overflow-hidden py-1 pr-3 ${className}`}>
      <h1 className="font-bold">{title}</h1>
      <p className="truncate text-ellipsis text-sm font-thin text-popover">{desc}</p>
    </div>
  );
};

const CardInfo: React.FC<CardInfoProps> = ({className = "", lastMsg, newMsgCount}) => {
  return (
    <div className={`ml-auto flex flex-col items-center min-w-[70px] justify-between ${className}`}>
      <p className="text-popover text-sm">{lastMsg}</p>
      <p className="bg-gray-400 w-6 h-6 text-center rounded-full">{newMsgCount}</p>
    </div>
  );
};

export { CardImage, Card, CardContent, CardInfo };

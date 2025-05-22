

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-[#0b3b60] text-white rounded-lg hover:bg-[#084358] transition ${className}`}
    >
      {text}
    </button>
  );
}
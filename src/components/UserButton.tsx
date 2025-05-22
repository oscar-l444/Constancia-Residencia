import { FaUserCircle } from "react-icons/fa";

export default function UserButton() {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
      <FaUserCircle size={30} />
    </div>
  );
}

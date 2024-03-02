import { MdCoffee } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="bg-blue-950 w-[300px] h-screen">
      <div className="h-16 p-4">
        <MdCoffee className="text-white text-5xl" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-white text-2xl">Sidebar content</p>
      </div>
    </div>
  );
}

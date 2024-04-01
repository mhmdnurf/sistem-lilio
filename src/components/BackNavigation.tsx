import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

interface BackNavigation {
  LinkKembali: string;
}

export default function BackNavigation({ LinkKembali }: BackNavigation) {
  return (
    <>
      <Link
        to={LinkKembali}
        className="flex items-center p-2 bg-blue-950 m-4 w-fit rounded-xl border-4 border-gray-100"
      >
        <MdKeyboardBackspace size={40} color="white" />
        <h1 className="font-semibold ml-2 text-white">Kembali</h1>
      </Link>
    </>
  );
}

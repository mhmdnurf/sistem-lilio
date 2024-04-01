import {
  MdOutlineArrowCircleDown,
  MdOutlineArrowCircleUp,
} from "react-icons/md";
import { Link } from "react-router-dom";

interface MasterNavigation {
  title: string;
  LinkMasuk: string;
  LinkKeluar: string;
}

export default function MasterNavigation({
  title,
  LinkMasuk,
  LinkKeluar,
}: MasterNavigation) {
  return (
    <>
      <div className="flex mx-8 my-16">
        <Link to={LinkMasuk} className="p-4 bg-sky-950 rounded-lg flex">
          <MdOutlineArrowCircleDown className="text-white mr-2" size={24} />
          <h1 className="text-white">{title} Masuk</h1>
        </Link>
        <Link to={LinkKeluar} className="p-4 bg-sky-950 ml-4 rounded-lg flex">
          <MdOutlineArrowCircleUp className="text-white mr-2" size={24} />
          <h1 className="text-white">{title} Keluar</h1>
        </Link>
      </div>
    </>
  );
}

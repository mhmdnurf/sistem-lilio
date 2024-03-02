import { MdFoodBank } from "react-icons/md";

export default function CardList() {
  return (
    <>
      <div className="flex flex-wrap flex-row justify-center my-16">
        <div className="text-2xl w-60 mr-8 shadow drop-shadow-sm rounded-lg bg-white">
          <div className="flex justify-between">
            <p className="text-slate-500 text-sm my-9 mx-4 font-bold uppercase">
              Jumlah Barang
            </p>
            <MdFoodBank className="text-[50px] text-white m-4 bg-sky-500 p-2 rounded-lg" />
          </div>
          <div className="mx-4 -mt-8 mb-7">
            <p className="text-4xl font-semibold">100</p>
            <p className="text-sm font-semibold text-slate-500 mt-2">
              Maret 2024
            </p>
          </div>
        </div>
        <div className="text-2xl w-60 shadow drop-shadow-sm rounded-lg bg-white">
          <div className="flex justify-between">
            <p className="text-slate-500 text-sm my-9 mx-4 font-bold uppercase">
              Jumlah Bahan
            </p>
            <MdFoodBank className="text-[50px] text-white m-4 bg-sky-500 p-2 rounded-lg" />
          </div>
          <div className="mx-4 -mt-8 mb-7">
            <p className="text-4xl font-semibold">100</p>
            <p className="text-sm font-semibold text-slate-500 mt-2">
              Maret 2024
            </p>
          </div>
        </div>
        <div className="text-2xl ml-8 w-60 shadow drop-shadow-sm rounded-lg bg-white">
          <div className="flex justify-between">
            <p className="text-slate-500 text-sm my-9 mx-4 font-bold uppercase">
              Bahan Masuk
            </p>
            <MdFoodBank className="text-[50px] text-white m-4 bg-sky-500 p-2 rounded-lg" />
          </div>
          <div className="mx-4 -mt-8 mb-7">
            <p className="text-4xl font-semibold">100</p>
            <p className="text-sm font-semibold text-slate-500 mt-2">
              Maret 2024
            </p>
          </div>
        </div>
        <div className="text-2xl ml-8 w-60 shadow drop-shadow-sm rounded-lg bg-white">
          <div className="flex justify-between">
            <p className="text-slate-500 text-sm my-9 mx-4 font-bold uppercase">
              Bahan Keluar
            </p>
            <MdFoodBank className="text-[50px] text-white m-4 bg-sky-500 p-2 rounded-lg" />
          </div>
          <div className="mx-4 -mt-8 mb-7">
            <p className="text-4xl font-semibold">100</p>
            <p className="text-sm font-semibold text-slate-500 mt-2">
              Maret 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import {
  MdFoodBank,
  MdMiscellaneousServices,
  MdArrowCircleDown,
  MdArrowCircleUp,
} from "react-icons/md";

interface CardList {
  statistikBarang: number;
  statistikBahan: number;
  statistikBahanMasuk: number;
  statistikBahanKeluar: number;
}

export default function CardList({
  statistikBarang,
  statistikBahan,
  statistikBahanMasuk,
  statistikBahanKeluar,
}: CardList) {
  return (
    <>
      <h1 className="text-2xl ml-8 mt-8 font-bold text-slate-700 font-poppins">
        Overview
      </h1>
      <div className="flex flex-wrap flex-row justify-center my-6">
        <div className="text-2xl w-60 mr-8 shadow drop-shadow-sm rounded-lg bg-white hover:transform hover:transition-transform hover:scale-110 hover:duration-200">
          <div className="flex justify-between">
            <p className="font-poppins text-slate-500 text-sm my-9 mx-4 font-bold uppercase">
              Jumlah Barang
            </p>
            <MdMiscellaneousServices className="text-[50px] text-white m-4 bg-red-500 p-2 rounded-lg" />
          </div>
          <div className="mx-4 -mt-8 mb-7">
            <p className="text-4xl font-semibold font-poppins text-slate-800">
              {statistikBarang}
            </p>
            <p className="font-nunito text-sm font-semibold text-slate-500 mt-2">
              {new Date().toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
              })}
            </p>
          </div>
        </div>
        <div className="text-2xl w-60 shadow drop-shadow-sm rounded-lg bg-white hover:transform hover:transition-transform hover:scale-110 hover:duration-200">
          <div className="flex justify-between">
            <p className="font-poppins text-slate-500 text-sm my-9 mx-4 font-bold uppercase">
              Jumlah Bahan
            </p>
            <MdFoodBank className="text-[50px] text-white m-4 bg-sky-500 p-2 rounded-lg" />
          </div>
          <div className="mx-4 -mt-8 mb-7">
            <p className="font-poppins text-4xl font-semibold text-slate-800">
              {statistikBahan}
            </p>
            <p className="font-nunito text-sm font-semibold text-slate-500 mt-2">
              {new Date().toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
              })}
            </p>
          </div>
        </div>
        <div className="text-2xl ml-8 w-60 shadow drop-shadow-sm rounded-lg bg-white hover:transform hover:transition-transform hover:scale-110 hover:duration-200">
          <div className="flex justify-between">
            <p className="font-poppins text-slate-500 text-sm my-9 mx-4 font-bold uppercase">
              Bahan Masuk
            </p>
            <MdArrowCircleDown className="text-[50px] text-white m-4 bg-green-500 p-2 rounded-lg" />
          </div>
          <div className="mx-4 -mt-8 mb-7">
            <p className="text-4xl font-semibold font-poppins text-slate-800">
              {statistikBahanMasuk}
            </p>
            <p className="font-nunito text-sm font-semibold text-slate-500 mt-2">
              {new Date().toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
              })}
            </p>
          </div>
        </div>
        <div className="text-2xl ml-8 w-60 shadow drop-shadow-sm rounded-lg bg-white hover:transform hover:transition-transform hover:scale-110 hover:duration-200">
          <div className="flex justify-between">
            <p className="font-poppins text-slate-500 text-sm my-9 mx-4 font-bold uppercase">
              Bahan Keluar
            </p>
            <MdArrowCircleUp className="text-[50px] text-white m-4 bg-yellow-500 p-2 rounded-lg" />
          </div>
          <div className="mx-4 -mt-8 mb-7">
            <p className="font-poppins text-4xl text-slate-800 font-semibold">
              {statistikBahanKeluar}
            </p>
            <p className="font-nunito text-sm font-semibold text-slate-500 mt-2">
              {new Date().toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

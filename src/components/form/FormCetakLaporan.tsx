interface FormCetakLaporan {
  startDate: string;
  endDate: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
}

export default function FormCetakLaporan({
  startDate,
  endDate,
  handleSubmit,
  setStartDate,
  setEndDate,
}: FormCetakLaporan) {
  return (
    <>
      <div className="bg-white h-96 mx-20 mt-10 shadow rounded-xl border-4">
        <form
          action=""
          className="justify-center flex flex-col mx-20 p-20"
          onSubmit={handleSubmit}
        >
          <label className="text-md font-semibold text-slate-800 my-1">
            Tanggal Awal
          </label>
          <input
            type="date"
            className="border-4 p-2 rounded-md my-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label className="text-md font-semibold text-slate-800 my-1">
            Tanggal Akhir
          </label>
          <input
            type="date"
            className="border-4 p-2 rounded-md my-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button
            type="submit"
            className="p-4 bg-teal-500 text-white font-semibold rounded-md my-2  focus:outline-none focus:ring-4 focus:ring-teal-600 focus:ring-opacity-50"
          >
            Cetak
          </button>
        </form>
      </div>
    </>
  );
}

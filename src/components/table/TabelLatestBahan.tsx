interface Data {
  _id: string;
  tanggal: string;
  namaBahan: string;
  jumlahBahan: number;
  satuan: number;
}

interface TabelLatestBahan {
  data: Data[];
}

export default function TabelLatestBahan({ data }: TabelLatestBahan) {
  return (
    <>
      <div className="max-h-48 overflow-auto">
        <table className="w-full">
          <thead className="text-zinc-600 text-left bg-gray-100 text-sm sticky top-0">
            <tr>
              <th className="px-6 py-3 font-medium">NO.</th>
              <th className="px-6 py-3 font-medium">TANGGAL</th>
              <th className="px-6 py-3 font-medium">NAMA BAHAN</th>
              <th className="px-6 py-3 font-medium">JUMLAH</th>
              <th className="px-6 py-3 font-medium">SATUAN</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, index) => (
              <tr key={item._id} className="border-b">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">
                  {("0" + new Date(item.tanggal).getDate()).slice(-2)}-
                  {("0" + (new Date(item.tanggal).getMonth() + 1)).slice(-2)}-
                  {new Date(item.tanggal).getFullYear()}
                </td>
                <td className="px-6 py-3">{item.namaBahan}</td>
                <td className="px-6 py-3">{item.jumlahBahan}</td>
                <td className="px-6 py-3">{item.satuan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

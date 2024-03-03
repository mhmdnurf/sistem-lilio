interface Header {
  title: string;
}

export default function Header({ title }: Header) {
  return (
    <>
      <div className="w-full shadow drop-shadow-sm bg-white sticky top-0 z-10">
        <h1 className="font-poppins text-3xl font-semibold p-4 text-slate-700">
          {title}
        </h1>
      </div>
    </>
  );
}

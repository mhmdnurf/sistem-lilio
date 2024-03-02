interface Header {
  title: string;
}

export default function Header({ title }: Header) {
  return (
    <>
      <div className="w-full shadow drop-shadow-sm bg-white">
        <h1 className="text-3xl font-semibold p-4 text-zinc-900">{title}</h1>
      </div>
    </>
  );
}

import Sidebar from "./Sidebar";

interface Container {
  children: React.ReactNode;
}

export default function Container({ children }: Container) {
  return (
    <div className="flex flex-row w-full h-screen bg-slate-50">
      <Sidebar />
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
}

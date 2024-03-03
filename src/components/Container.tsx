import Sidebar from "./Sidebar";

interface Container {
  children: React.ReactNode;
}

export default function Container({ children }: Container) {
  return (
    <div className="flex h-[100vh] bg-white">
      <div className="w-[250px] h-full sticky top-0">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
}

import Loader from "./Loader";
import Sidebar from "./Sidebar";

interface Container {
  children: React.ReactNode;
  isLoading: boolean;
}

export default function Container({ children, isLoading }: Container) {
  return (
    <div className="flex h-[100vh] bg-slate-50">
      <div className="w-[250px] h-full sticky top-0">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-auto">
        {isLoading ? <Loader /> : children}
      </div>
    </div>
  );
}

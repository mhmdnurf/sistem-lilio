import { FallingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <div className="justify-center items-center flex h-full">
        <FallingLines color="#3b82f6" width="100" visible={true} />
      </div>
    </>
  );
}

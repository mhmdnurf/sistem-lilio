import React from "react";
import { MdCoffeeMaker } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type Event = {
  preventDefault: () => void;
};

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const user = { email, password };
    if (user) {
      navigate("/");
    }
  };
  return (
    <>
      <div className="flex px-16 py-6 bg-blue-500">
        <MdCoffeeMaker className="w-12 h-12 text-blue-100" />
        <h1 className="text-4xl font-semibold text-white">
          Login - Sistem Inventori Lilio Coffee Garden
        </h1>
      </div>
      <div className="flex justify-center items-center h-screen bg-blue-50">
        <div className="w-1/2 p-20 mx-16 drop-shadow bg-white border-4 border-blue-100 rounded-3xl">
          <h1 className="text-2xl font-bold text-slate-600 mb-4 text-center">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 drop-shadow-sm">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-3 w-full border rounded-xl focus:outline focus:outline-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
            </div>
            <div className="mb-4 drop-shadow-sm">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-3 w-full border rounded-xl focus:outline focus:outline-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-950 focus:outline focus:outline-blue-300 text-white py-4 rounded-2xl text-xl"
            >
              Login{" "}
            </button>
          </form>
        </div>
        <div className="w-1/2">
          <img src="./assets/login.svg" alt="Right" className="w-full" />
        </div>
      </div>
      <div className="p-6 bg-blue-500">
        <h1 className="text-center text-md font-semibold text-white">
          Sistem Inventori Lilio Coffee Garden, Made by Fichry Kosandi
        </h1>
      </div>
    </>
  );
}

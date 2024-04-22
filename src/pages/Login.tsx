import React from "react";
import { MdCoffeeMaker } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../utils/firebase";
import Loader from "../components/Loader";
import Swal from "sweetalert2";

type Event = {
  preventDefault: () => void;
};

interface FirebaseError {
  code: string;
  message: string;
}

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: Event) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        Swal.fire({
          icon: "success",
          title: "Login Berhasil",
        });
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      const firebaseError = error as FirebaseError;
      if (firebaseError.code === "auth/user-not-found") {
        await Swal.fire("Error", "Akun anda tidak terdaftar", "error");
      } else if (firebaseError.code === "auth/wrong-password") {
        await Swal.fire("Error", "Email atau password salah", "error");
      } else if (firebaseError.code === "auth/invalid-credential") {
        await Swal.fire(
          "Error",
          "Akun tidak valid, email atau password salah!",
          "error"
        );
      } else {
        console.error("Error login: ", firebaseError);
        await Swal.fire("Error", firebaseError.message, "error");
      }
    }
  };

  const checkLogin = React.useCallback(() => {
    setIsLoading(true);
    const auth = getAuth(app);
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [navigate]);

  React.useEffect(() => {
    checkLogin();
  }, [checkLogin]);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
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
              <form onSubmit={handleLogin}>
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
                  {isLoading ? "Loading..." : "Login"}
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
      )}
    </>
  );
}


"use client"
import Logo from "@/public/images/logo (1).png"
import Image from "next/image"
// import Link from "next/link"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";


export default function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [isLoading, setIsLoading] = useState("");
  //   const { setToken } = useContext(AuthContext);
  const navigate = useRouter();

  async function handlerSubmitForm(e: FormEvent) {
    e.preventDefault();
    try {
      // var data = JSON.stringify({
      //   email: email,
      //   motDePasse: password,
      // });

      if (role == "admin") {
        navigate.push("/admin/home");
      }else{
        alert('Page non disponible')
      }
      // var csrfToken = axios.defaults.headers.common['X-CSRF-Token'];
      // var config = {
      //   method: "post",
      //   url: "http://localhost:3001/superviseurs/login",
      //   headers: {
      //     "Content-Type": "application/json",
      //     'X-CSRF-Token': csrfToken,
      //   },

      //   data: data,
      // };
      // const response = await axios(config);
      //   setToken(response.data.token);
      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem("user", response.data.user);
      // console.log(response);

      // navigate("/dashboard");
    } catch (error) {
      console.error("Authentication failed:", error);
      //   setToken(null);
      console.log(error);
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // if (error.response && error.response.data) {
      //   setErrorMessage(error.response.data); // Set the error message if present in the error response
      // } else {
      //   setErrorMessage("An unexpected error occurred. Please try again.");
      // }
    }
  }
  return (
    <>
      <div className="relative w-full min-h-screen text-white">
        <div className="absolute top-0 left-0 z-50 bg-blue-500 rounded-full blur-3xl" style={{ width: 500, height: 500 }}>s</div>
        <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full blur-3xl" style={{ width: 500, height: 500 }}>s</div>
        <div className="absolute z-20 flex items-center justify-center w-full h-full bg-black/40 ">
          <div className="w-full max-w-sm px-8 py-10 bg-white shadow-md rounded-2xl">
            <Image src={Logo.src} className="w-32 mx-auto" width={250} height={250} alt="Logo"></Image>
            {/* <h3 className="font-bold text-center text-blue-500">REVERSE</h3> */}
            <div>
              <form
                onSubmit={handlerSubmitForm}
                className="flex flex-col max-w-md gap-4 text-stone-800"
              >
                <div className="max-w-md">
                  <div className="block mb-2">
                    <label
                      htmlFor="role"
                      className="text-stone-800 "
                    >Role</label>
                    <select
                      onChange={(e) => setRole(e.target.value)}
                      value={role}
                      color="blue"
                      id="role"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    >
                      <option selected ></option>
                      <option value={"admin"}>Superviseur</option>
                      <option value={"finance"}>Contrôleur financier</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="block mb-2">
                    <label
                      htmlFor="role"
                      className="text-stone-800 "
                    >Téléphone ou E-mail</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      color="blue"
                      id="email1"
                      type="email"
                      placeholder="Numéro de téléphone ou l'Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="block mb-2">
                    <label
                      htmlFor="role"
                      className="text-stone-800 "
                    >Mot de passe</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      color="blue"
                      placeholder="Entrer votre mot de passe"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="password1"
                      type="password"
                      required
                    />
                  </div>
                </div>
                {/* <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Text htmlFor="remember">Remember me</Text>
            </div> */}
                <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800" color="blue">
                  Se connecter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

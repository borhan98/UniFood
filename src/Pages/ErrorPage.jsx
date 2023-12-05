import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import errorImage from "../assets/Error404.png"



const ErrorPage = () => {
    return (
      <div className={"bg-error-pattern bg-login-bg bg-center bg-cover bg-no-repeat h-[650px]"}>
        <div className="container bg-[#0000007e] mx-auto flex items-center justify-center h-full">
          <div className="order-2">
            <h2 className="flex">
              <span className="text-xl text-[#F89A20]"><RiMenu3Line className="rotate-45" /></span>
              <span className="first-letter:text-6xl first-letter:text-[#F89A20] text-4xl font-bold mt-2 -ml-2 text-zinc-200">Ooooops</span>
            </h2>
            <p className="text-zinc-200 mt-2 mb-4">We can&#39;t seem to find a page you <br /> are looking for.</p>
            <button className="bg-[#F89A20] p-3 rounded-md text-white font-bold tracking-wider border border-[#F89A20] duration-300 hover:bg-transparent hover:text-zinc-200">
              <NavLink to={"/"}>Back to Home</NavLink>
            </button>
          </div>
          <figure className="order-1 h-full">
            <img className="h-full" src={errorImage} alt="Error image" />
          </figure>
        </div>
      </div>
    );
  };
  
  export default ErrorPage;
  
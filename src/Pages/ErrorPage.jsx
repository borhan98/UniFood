import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import errorImage from "../assets/Error404.png"



const ErrorPage = () => {
  return (
    <div className={"relative bg-center bg-cover bg-no-repeat h-[100vh]"} style={{
      backgroundImage: "url(https://i.ibb.co/Qf3jCgX/loginBG.jpg)"
    }}>
      <div className="absolute top-0 left-0 h-full w-full bg-[#000000b9]">
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="order-2 flex-1">
            <h2 className="flex">
              <span className="text-xl text-[#F89A20]"><RiMenu3Line className="rotate-45" /></span>
              <span className="first-letter:text-6xl first-letter:text-[#F89A20] text-4xl font-bold mt-2 -ml-2 text-zinc-200">Ooooops</span>
            </h2>
            <p className="text-zinc-200 mt-2 mb-4">We can&#39;t seem to find a page you <br /> are looking for.</p>
            <button className="bg-[#F89A20] p-3 rounded-md text-white font-bold tracking-wider border border-[#F89A20] duration-300 hover:bg-transparent hover:text-zinc-200">
              <NavLink to={"/"}>Back to Home</NavLink>
            </button>
          </div>
          <figure className="order-1 h-full flex-1">
            <img className="h-full" src={errorImage} alt="Error image" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

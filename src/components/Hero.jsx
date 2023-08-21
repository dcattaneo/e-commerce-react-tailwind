import SexyWoman from "./../assets/sexy.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="h-[800px]  bg-no-repeat bg-cover py-24  bg-center bg-sky-100">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-sky-400"></div> REACT & TAILWIND 
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            E-SHOP
            <br />
            <span className="font-semibold">MODEL</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-blue-300"
          >
            take a look
          </Link>
         </div>
         <div className="hidden xl:block mix-blend-multiply">
            <img className="h-[700px] w-screen" src={SexyWoman} alt="SexyWoman" />
        </div>
      </div>
    </section>
  );
};

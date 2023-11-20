import image from "../../assets/images/1.jpg";
import Home2 from "./Home2";
import Contianer from "../Contianer";
const Home = () => {
  return (
    <section>
      <div className="home-wrapper bg-[#EBF3E8]">
        {/* <div className="hero flex max-w-[1300px] mx-auto px-[50px] h-screen items-center justify-center"> */}
        <Contianer className="flex flex-1 md:flex-row flex-col justify-center gap-20 md:gap-0 items-center h-[90vh] md:h-screen px-6 ">
          <div className="flex flex-col gap-10 md:items-start items-center text-3xl w-full font-[500]">
            <h1 className="md:text-5xl font-semibold">Hi there!</h1>
            <h1 className="font-bold">
              I'M <span className="text-[#427D9D]">CHHENG SEYHA</span>
            </h1>
            <h2 className="text-xl">Front-End Developer</h2>
            <button className="bg-[#427D9D] text-sm md:text-lg rounded-full text-white py-2 px-4">
              Download Resume
            </button>
          </div>
          <div className="flex items-center w-full justify-center md:justify-end">
            <img
              className="w-[250px] h-[250px] md:h-[400px] md:w-[400px]"
              src={image}
              alt=""
            />
          </div>
        </Contianer>
        {/* </div> */}
      </div>
      <Home2 />
    </section>
  );
};

export default Home;

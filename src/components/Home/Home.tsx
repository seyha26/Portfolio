import Contianer from "../Contianer";
import Button from "../Button";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleDownload = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 3000);
  };

  return (
    <section id="home">
      <Contianer className="flex justify-center gap-3 flex-col items-center h-screen relative">
        <div className="text-3xl mb-10 w-[400px] font-[500] border-r-[10px] border-b-[10px] border-[#def2f1] pb-6 pr-10">
          <h1 className="md:text-5xl font-semibold uppercase">Hi there!</h1>
          <h1 className="font-bold text-5xl my-4">
            I'M <span className="text-[#feffff] ">CHHENG SEYHA</span>
          </h1>
          <h2 className="text-xl mb-4 ">
            I am a Front-End Developer. I really enjoy with this Job. I have
            done many project.
          </h2>
          <Button
            className=" bg-[#2b7a78] hover:shadow-md hover:bg-[#def2f1] hover:text-[#2b7a78] text-[#def2f1]"
            isLoading={isLoading}
            success={success}
            label="Download Resume"
            icon={<Icon icon="line-md:download-loop" fontSize={35} />}
            onClick={handleDownload}
          />
        </div>
        <div className=" flex gap-5 absolute bottom-20">
          <Icon
            icon="bxl:instagram-alt"
            style={{
              color:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
            }}
            fontSize={40}
          />
          <Icon icon="bxl:facebook-square" fontSize={40} />
          <Icon icon="bxl:linkedin-square" fontSize={40} />
          <Icon icon="bxl:github" fontSize={40} />
        </div>
      </Contianer>
    </section>
  );
};

export default Home;

import Contianer from "../Contianer";
import profile from "../../assets/images/profile.jpg";
import Button from "../Button";

const About = () => {
  return (
    <section className="bg-[#def2f1]" id="about">
      <Contianer className="">
        <div className="">
          <div className="flex w-full justify-between items-center mt-7">
            <div className="w-full">
              <h1 className="text-4xl font-bold text-[#2b7a78] uppercase">
                About Me
              </h1>
              <p className="text-xl text-neutral-600 mt-6 mb-3 w-[440px] text-justify">
                My name is Chheng Seyha. I am a
                <span className="text-[#2b7a78]"> Frontend Developer</span>. I
                finished my Associate Degree in Don Bosco Technical School, Kep.
                I finished my internship in Loma Technology as a Front end
                Developer. I'm free now if You're interest with me You can
                contact me.
              </p>
              <Button
                className="bg-[#3aafa9] text-[#ffff] hover:shadow-md hover:bg-[#2b7a78] hover:text-gray-100"
                label="Download CV"
                onClick={() => {}}
              />
            </div>
            <div className="w-full flex justify-end">
              <img className="w-[400px]" src={profile} alt="" />
            </div>
          </div>
        </div>
      </Contianer>
      ;
    </section>
  );
};

export default About;

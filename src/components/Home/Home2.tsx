import Side from "../Side";
import image from "../../assets/images/1.jpg";

const Home2 = () => {
  return (
    <div>
      <div className="flex max-w-[1300px] mx-auto">
        <Side>
          <h1>LET ME INTRODUCE MYSELF </h1>
        </Side>
        <Side>
          <img src={image} alt="" />
        </Side>
      </div>
    </div>
  );
};

export default Home2;

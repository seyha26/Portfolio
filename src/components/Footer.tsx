import Container from "./Container";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <footer className="">
      <Container className="text-white">
        <div className="flex py-4 justify-center">
          <h1 className="text-xl font-bold">CHHENG SEYHA</h1>
        </div>
        <div className=" flex py-3 justify-center">
          <div className="flex gap-5 social-icons">
            <a href="https://www.instagram.com/">
              <Icon icon="bxl:instagram-alt" fontSize={40} />
            </a>
            <a href="https://www.facebook.com/">
              <Icon icon="bxl:facebook-square" fontSize={40} />
            </a>
            <a href="https://www.linkedin.com/">
              <Icon icon="bxl:linkedin-square" fontSize={40} />
            </a>
            <a href="https://www.github.com/">
              <Icon icon="bxl:github" fontSize={40} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-white/80">
          <p>&copy; 2023 Chheng Seyha</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

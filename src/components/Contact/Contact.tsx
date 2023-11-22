import Container from "../Container";

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <Container>
        <div className="flex items-center flex-col md:flex-row justify-between">
          <div className="w-full hidden md:block text-black text-lg ">
            <div>
              <p>Address </p>
              <span className="text-gray-700">Phnom Penh, Cambodia</span>
            </div>
            <div className="my-4">
              <p>Email Address</p>
              <span className="text-gray-700">seyhachheng@gmail.com</span>
            </div>
            <div>
              <p>Phone Number</p>
              <span className="text-gray-700">+855 886-764-971</span>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <div className="flex flex-col w-full">
              <h1 className="text-3xl uppercase text-center md:text-left font-bold text-[#15252a] ">
                Contact Me
              </h1>
              <form className="flex mt-7 flex-col gap-2">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                  <input
                    className=" outline-none border-gray-400 border-[1px] text-gray-700 focus:outline-none p-2 rounded-sm"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className=" outline-none border-gray-400 border-[1px] text-gray-700 focus:outline-none p-2 rounded-sm"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <input
                  className=" outline-none border-gray-400 border-[1px] text-gray-700 focus:outline-none p-2 rounded-sm"
                  type="email"
                  placeholder="Email Address"
                />
                <textarea
                  rows={7}
                  className="resize-none outline-none border-gray-400 border-[1px] text-gray-700 focus:outline-none p-2 rounded-sm"
                  placeholder="Your message"
                />
                <button
                  className="bg-[#3bc2be] py-2 text-white rounded-sm hover:bg-[#48b7b3] hover:shadow-sm"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

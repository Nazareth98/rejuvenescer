import React from "react";
import marca from "../assets/marca.png";
import Button from "../components/button";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Header = () => {


  const links = [
    { name: "Inicio", link: "#home" },
    { name: "Serviços", link: "#products" },
    { name: "Fale Conosco", link: "#find-us" },
    { name: "Sobre", link: "#about" },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <header>
      <div className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
        <div className="md:m-auto xl:w-4/6 md:flex items-center justify-between  py-4 md:px-10 px-7">
          <div className="cursor-pointer flex items-center">
            <span>
              <img className="h-12 md:h-[4.5rem]" src={marca} alt="" />
            </span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <img src={open ? close : menu} alt="" />
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0`}
          >
            {links.map((link) => {
              return (
                <li key={link.name} className="md:mx-4 text-xl md:my-0 my-7">
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-[#AB8966] duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            <Button link ="https://api.whatsapp.com/send?phone=5545984070668&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!" name="agendamentos" />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Menu from "../menu/Menu";
import 'animate.css';

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const [data,setData] = useState([])
  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("manits"));
    if (storedValues) {
      setData(storedValues);
    }
  }, [])
  const switcher = () => {
    setOpen(!isOpen);
  };
  console.log("data",data)
  return (
    <React.Fragment>
      {isOpen && <Menu setClose={switcher}/>}
      <button
        className="cursor-pointer block h-12 w-12 fixed transform z-[999] left-10 top-10 bg-white opacity-50 rounded-full"
        onClick={switcher}
      >
        <Hamburger toggled={isOpen} color="#888a8c" toggle={setOpen} />
      </button>
      <section
      id="hero"
        className="w-full h-screen relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
          `url(${data.bannerImage})`,
        }}
      ></section>
      <div
        className="hero-content text-center text-white z-[1] w-64 h-[256px] bg-white flex flex-col items-center justify-center rounded-full
           absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-red-600"
      >
        <div className="text-2xl text-red-600 font-bold">Bizim Sayfamız</div>
        <div className="text-3xl text-black">
          <b>{data.boyName} & {data.girlName}</b>
        </div>
        <div className="text-2xl text-red-600">28.06.2014 - ∞</div>
      </div>
    </React.Fragment>
  );
};

export default Hero;

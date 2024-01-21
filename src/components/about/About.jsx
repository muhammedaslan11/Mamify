import React, { useEffect, useState } from "react";
import About_bg from "../../assets/about-bg.png"

const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("manits"));
    if (storedValues) {
      setData(storedValues);
    }
  }, []);
  return (
    <React.Fragment>
      <section
        id="about"
        style={{
          backgroundImage: `url(${About_bg})`,
        }}
        className="bg-shadow -z-[-1] about-parent flex w-screen h-fit py-24 justify-around items-center text-center bg-cover max-w-full relative"
      >
        <div className="animate__backInLeft image w-72 h-72 rounded-full overflow-hidden object-cover  border-4 border-red-600">
          <img
            className="w-full h-full"
            src={
              `${data.boyImage}` ||
              "https://s1.eestatic.com/2020/02/19/elbernabeu/el_bernabeu_468715483_145905305_1706x960.jpg"
            }
            alt=""
          />
        </div>
        <div className="center-part">
          <div className="text-white text-4xl border-y-4	border-white py-2">
            Seni Çok Seviyorum...
          </div>
          {data.boyName && data.girlName && (
            <div className="text-white text-2xl font-bold my-3">
              {data.boyName.toUpperCase()} & {data.girlName.toUpperCase()}
            </div>
          )}
          <div className="text-[18px]">
            Aşk sabahlara kadar uyumamak <br /> değildi aslında, Her sabah
            uyandığında <br /> yaşamaktan önce onun gelmesiydi aklına...
          </div>
          <div className="text-[20px] mt-2">
            <strong>
              Çıkmaz Yazdığı Halde Girdiğin <br /> Sokağın Adıdır:
            </strong>
          </div>
          <div className="heart-container relative w-[60px] h-[96px] mx-auto my-30vh">
            <div className="heart w-full h-full absolute top-0 left-0 transform rotate-45 transition-transform duration-500 animate-heartbeat cursor-pointer">
              <div className="absolute top-1/2 left-[70%] translate-x-[-50%] translate-y-[-50%] z-10 font-bold text-2xl text-white">
                Aşk
              </div>
            </div>
          </div>
        </div>
        <div className="animate__backInRight image w-72 h-72 rounded-full overflow-hidden object-cover border-4 border-red-600">
          <img
            className="w-full h-full"
            src={
              `${data.girlImage}` ||
              "https://www.voici.fr/imgre/fit/~1~voi~2021~10~21~79650cf4-c939-4e81-b37f-b070fde91a15.jpeg/5760x3840/quality/80/wanda-nara.jpeg"
            }
            alt=""
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;

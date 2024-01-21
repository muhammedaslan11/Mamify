import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("manits"));
    if (storedValues) {
      setData(storedValues);
    }
  }, [])
  // https://images.pexels.com/photos/3964363/pexels-photo-3964363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
  // https://img.freepik.com/free-photo/3d-render-spotlights-grunge-brick-wall_1048-6284.jpg
  const [values, setValues] = useState({
    boyName: "İcardi",
    girlName: "Wanda",
    bannerImage:
      "https://iaspr.tmgrup.com.tr/album/2023/11/08/mauro-icardinin-esi-wanda-naradan-hastalik-aciklamasi-iste-son-durumu-1699457705520.jpg",
      boyImage: "https://s1.eestatic.com/2020/02/19/elbernabeu/el_bernabeu_468715483_145905305_1706x960.jpg",
      girlImage: "https://www.voici.fr/imgre/fit/~1~voi~2021~10~21~79650cf4-c939-4e81-b37f-b070fde91a15.jpeg/5760x3840/quality/80/wanda-nara.jpeg",
  });
  localStorage.setItem("manits", JSON.stringify(values));
  console.log("object", values);
  return (
    <React.Fragment>
      <div
        className="w-screen h-screen relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1304681590/tr/foto%C4%9Fraf/spot-%C4%B1%C5%9F%C4%B1kl%C4%B1-%C3%BCr%C3%BCn-vitrini-siyah-st%C3%BCdyo-oda-arka-plan-%C3%BCr%C3%BCn-g%C3%B6sterimi-i%C3%A7in-montaj-olarak.jpg?b=1&s=612x612&w=0&k=20&c=AIReRSVGsjJL24QwTvBx7QuHGmzUX4tmkUqTiKewpUU=)",
        }}
      ></div>
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-3xl z-[2] p-5 text-white text-center">
        Welcome to the
        <br />
        <span className="text-blue-500 font-bold">Mamify</span>
        <span className="font-medium">Project</span> <br />
        <br />
        <form action="" className="">
          <div className=" border-2 border-black">
            <label htmlFor="Title" className="text-[15px] flex">
              Erkek Adı
            </label>
            <input
              className="text-black"
              placeholder={values.boyName}
              type="text"
              onChange={(event) => {
                setValues({ ...values, boyName: event.target.value });
              }}
            />
          </div>
          <div className=" border-2 border-black">
            <label htmlFor="Title" className="text-[15px] flex">
              Kız Adı
            </label>
            <input
              className="text-black"
              placeholder={values.girlName}
              type="text"
              onChange={(event) => {
                setValues({ ...values, girlName: event.target.value });
              }}
            />
          </div>
          <div className=" border-2 border-black">
            <label htmlFor="Title" className="text-[15px]">
              Banner İmage
            </label>
            <input
              type="text"
              placeholder={values.bannerImage}
              className="flex text-black"
              onChange={(event) => {
                setValues({ ...values, bannerImage: event.target.value });
              }}
            />
          </div>
          <div className=" border-2 border-black">
            <label htmlFor="Title" className="text-[15px]">
              Erkek Photo
            </label>
            <input
              type="text"
              placeholder={values.boyImage}
              className="flex text-black"
              onChange={(event) => {
                setValues({ ...values, boyImage: event.target.value });
              }}
            />
          </div>
          <div className=" border-2 border-black">
            <label htmlFor="Title" className="text-[15px]">
              Kız Photo
            </label>
            <input
              type="text"
              placeholder={values.girlImage}
              className="flex text-black"
              onChange={(event) => {
                setValues({ ...values, girlImage: event.target.value });
              }}
            />
          </div>
          <Link className="font-bold bg-blue-500" to={`/icardi-wanda`}>
          {/* <Link className="font-bold bg-blue-500" to={`/${data.boyName.toLoverCase()}-${data.girlName.toLoverCase()}`}> */}
            Lets Go👈
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Homepage;

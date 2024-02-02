import React, { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Poempart from "../../components/poem/Poem";
import About from "../../components/about/About";
import { pb } from "../../lib/pocketbase/Pocketbase";

const Manitpage = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const testt = await pb.collection("mamify_test").getOne("zxp1v3hv6y041d5");
        console.log(`Data:`, testt);
        localStorage.setItem("manits", JSON.stringify(testt));
      } catch (error) {
        console.error(`Error fetching data:`, error);
      }
    };
    getData();
  }, []);
  // const [values, setValues] = useState({
  //   boyName: ,
  //   girlName: "Wanda",
  //   bannerImage:
  //     "https://iaspr.tmgrup.com.tr/album/2023/11/08/mauro-icardinin-esi-wanda-naradan-hastalik-aciklamasi-iste-son-durumu-1699457705520.jpg",
  //     boyImage: "https://s1.eestatic.com/2020/02/19/elbernabeu/el_bernabeu_468715483_145905305_1706x960.jpg",
  //     girlImage: "https://www.voici.fr/imgre/fit/~1~voi~2021~10~21~79650cf4-c939-4e81-b37f-b070fde91a15.jpeg/5760x3840/quality/80/wanda-nara.jpeg",
  // });

  console.log(window.location.pathname);

  return (
    <React.Fragment>
      <Hero />
      <About />
      <Poempart />
    </React.Fragment>
  );
};

export default Manitpage;

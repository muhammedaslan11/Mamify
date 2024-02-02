import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const Menu = ({ setClose }) => {
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    try {
      const storedValues = JSON.parse(localStorage.getItem("manits"));
      if (storedValues && storedValues.menuSliderImages) {
        setSliderImages(storedValues.menuSliderImages);
        console.log("object", storedValues.menuSliderImages);
      }
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
    }
  }, []);

  // const images = [
  //   {
  //     image:
  //       "https://images.pexels.com/photos/4172878/pexels-photo-4172878.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/4688504/pexels-photo-4688504.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/6596901/pexels-photo-6596901.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/7905373/pexels-photo-7905373.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/7931553/pexels-photo-7931553.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/5911273/pexels-photo-5911273.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/6401609/pexels-photo-6401609.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  // ];
  return (
    <React.Fragment>
      {/* style */}
      <style jsx>{`
        body {
          overflow: hidden;
        }
        .menu-parent {
          background-color: #ec0201;
        }
        .container {
          margin: auto;
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100vh;
          z-index: 11;
          position: relative;
        }

        .container .logo {
          margin: 0 auto;
          margin-bottom: 3rem;
          max-width: 250px;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 100%;
        }

        .container .logo img {
          width: 100%;
        }

        .menu {
          display: flex;
          flex-direction: column;
          width: 100%;
          grid-area: 1/1/2/2;
          position: relative;
        }

        .menu a {
          font-family: Raleway, serif;
          color: #333;
          cursor: pointer;
          font-size: 20px;
          font-weight: 700;
          line-height: 1;
          position: relative;
          text-align: center;
          margin: 1vh auto;
          padding: 2.5vh 0;
          width: 80%;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(15px);
          border-radius: 5px;
          box-shadow: 1px 1px 0 0 rgba(255, 255, 255, 0.8) inset,
            3px 5px 10px 0 rgba(0, 0, 0, 0.1);
          text-decoration: none;
          will-change: color, text-shadow, font-size;
          transition: ease all 0.3s;
        }

        .menu a:hover {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.8);
        }

        .wrapper-images {
          background-color: #ec0201;
          display: flex;
          flex-direction: column;
          height: 150vh;
          justify-content: center;
          left: 50%;
          position: absolute;
          top: 50%;
          opacity: 1;
          transform: translate3d(-50%, -50%, 0) rotate(22.5deg);
          z-index: 10;
        }

        .images-line {
          animation: runner 20s linear infinite;
          display: flex;
          transform: translateX(25%);
        }

        .images-line .line {
          --tile-margin: 3vw;
          background-position: 50% 50%;
          background-size: cover;
          border-radius: 50%;
          flex: none;
          height: 30vh;
          margin: 3vw;
          width: 30vh;
          position: relative;
        }

        .images-line::after {
          content: "";
          background: inherit;
          display: block;
          height: 100%;
          width: 100%;
          border-radius: 50%;
          top: 3vh;
          position: absolute;
          background-size: cover;
          z-index: -1;
          filter: blur(25px) opacity(0.8);
        }
        @keyframes runner {
          to {
            transform: translateX(-25%);
          }
        }
      `}</style>
      {/* style */}
      {/* <div
        className="absolute top-0 w-screen h-screen"
        style={{ left: "0", transition: ".2 all" }}
      > */}
      <div className="menu-parent fixed top-0 left-0 w-screen h-screen bg-red-600 z-30">
        <div className="wrapper-images">
          <div className="images-line">
            {sliderImages.map((item, index) => {
              console.log("wqwqw", item);
              return (
                <div
                  key={index}
                  className="line"
                  style={{
                    backgroundImage: `url(https://mahe-english.fly.dev/api/files/f0vyhe26igz3zbn/wqy7ja91fv59v76/${item})`,
                  }}
                />
              );
            })}
          </div>
          {/* Diğer images-line'ları ekleyin */}
        </div>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Natural Pet Bakery" />
          </div>
          <nav className="menu">
            <a
              onClick={() => {
                setClose(false);
              }}
              href="#hero"
            >
              Giriş Ekranı
            </a>
            <a
              onClick={() => {
                setClose(false);
              }}
              href="#about"
            >
              Bizim Hakkımızda
            </a>
            <a
              onClick={() => {
                setClose(false);
              }}
              href="#poempart"
            >
              Sana Özel Şiir
            </a>
            <a
              onClick={() => {
                setClose(false);
              }}
              href="#hero"
            >
              Aşkımızın Filmi...
            </a>
            <a
              onClick={() => {
                setClose(false);
              }}
              href="#hero"
            >
              Teşekkür...
            </a>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;

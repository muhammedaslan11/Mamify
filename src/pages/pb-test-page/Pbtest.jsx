import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pb } from "../../lib/pocketbase/Pocketbase";

const Pbtest = () => {
  const [formData, setFormData] = useState(new FormData());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formData.append(name, value);
  };

  const handleFileChange = (e) => {
    const fileInput = e.target;
    for (let file of fileInput.files) {
      formData.append('documents', file);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdRecord = await createRecord('mamify_test', formData);
      // İşlemlerin devamını buraya ekleyebilirsiniz
    } catch (error) {
      // Hata durumunda yapılacak işlemleri buraya ekleyebilirsiniz
      console.error("Error during form submission:", error);
    }
  };

  const createRecord = async (collectionName, formData) => {
    try {
      const createdRecord = await pb.collection(collectionName).create(formData);
      console.log("Record created successfully:", createdRecord);
      return createdRecord;
    } catch (err) {
      console.error("Error creating record:", err);
      throw err;
    }
  };

  return (
    <React.Fragment>
      <div
        className="w-screen h-screen relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1304681590/tr/foto%C4%9Fraf/spot-%C4%B1%C5%9F%C4%B1kl%C4%B1-%C3%BCr%C3%BCn-vitrini-siyah-st%C3%BCdyo-oda-arka-plan-%C3%BCr%C3%BCn-g%C3%B6sterimi-i%C3%A7in-montaj-olarak.jpg?b=1&s=612x612&w=0&k=20&c=AIReRSVGsjJL24QwTvBx7QuHGmzUX4tmkUqTiKewpUU=)",
        }}
      ></div>
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-3xl z-[2] p-5 text-white bg-gray-500 text-center">
        Welcome to the
        <br />
        <span className="text-blue-500 font-bold">Mamify</span>
        <span className="font-medium">Project</span> <br />
        <br />
        <form onSubmit={handleFormSubmit}>
          <div className=" border-2 border-black">
            <label htmlFor="boyName" className="text-[15px] flex">
              Erkek Adı
            </label>
            <input
              name="boyName"
              className="text-black"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className=" border-2 border-black">
            <label htmlFor="girlName" className="text-[15px] flex">
              Kız Adı
            </label>
            <input
              name="girlName"
              className="text-black"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className=" border-2 border-black">
            <label htmlFor="bannerImage" className="text-[15px]">
              Banner İmage
            </label>
            <input
              name="bannerImage"
              id="fileInputBanner"
              type="file"
              className="flex text-black"
              onChange={handleFileChange}
            />
          </div>
          <div className=" border-2 border-black">
            <label htmlFor="boyImage" className="text-[15px]">
              Erkek Photo
            </label>
            <input
              name="boyImage"
              id="fileInputBoyImage"
              type="file"
              className="flex text-black"
              onChange={handleFileChange}
            />
          </div>
          <div className=" border-2 border-black">
            <label htmlFor="girlImage" className="text-[15px]">
              Kız Photo
            </label>
            <input
              name="girlImage"
              id="fileInputGirlImage"
              type="file"
              className="flex text-black"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="font-bold bg-blue-500">
            Lets Go👈
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Pbtest;

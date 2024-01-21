import React from "react";

const Poempart = () => {
  return (
    <React.Fragment>
      <section
        id="poempart"
        className="bg-shadow w-screen -z-[-1] h-fit bg-cover min-h-screen flex flex-col justify-center items-center gap-6 relative"
        style={{
          backgroundImage:
            "url(http://burakveaylin.bizimsayfamiz.com/wp-content/uploads/2019/09/love-background-005-1400x875.jpg)",
        }}
      >
        <div className="text-white text-4xl border-y-4	border-white py-2">
          Sana Bakmak
        </div>
        <pre className="poem-subtitle text-white vollkorn">
          Sana bakmak suya bakmaktır, sana bakmak bir mucizeyi anlamaktır...
        </pre>
        <div className="text-white vollkorn-small text-center">
          Bir demet <br />
          mutluluğun, İçerisinde aşk yazıyor.
          <br /> Varlığının, yokluğunun…
          <br />
          Değerini biliyorum.
          <br />
          Bana kıymet <br /> gerekmiyor, Değer katan sensin <br /> bana. Aşka
          tarih gerekmiyor,
          <br />
          En güzel tarif <br />
          sensin bana.
        </div>
        {/* <div>
          sana bakmak <br /> bir beyaz kağıda bakmaktır <br /> her şey olmaya
          hazır <br /> sana bakmak <br /> suya bakmaktır <br /> gördüğün
          suretten utanmak <br /> sana bakmak <br /> bütün rastlantıları
          reddedip <br /> bir mucizeyi anlamaktır <br /> sana bakmak <br />{" "}
          Allah’a inanmaktır
        </div> */}
      </section>
    </React.Fragment>
  );
};

export default Poempart;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import IcardiWanda from "./pages/Icardiwanda/IcardiWanda";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/icardi-wanda" element={<IcardiWanda />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Homepage from "./pages/Homepage/Homepage";
// import IcardiWanda from "./pages/Icardiwanda/IcardiWanda";

// function App() {
//   const [data,setData] = useState([])
//   useEffect(() => {
//     const storedValues = JSON.parse(localStorage.getItem("manits"));
//     if (storedValues) {
//       setData(storedValues);
//     }
//   }, [])
//   return (
//     <React.Fragment>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path={`/${data.boyName}-${data.girlName}`} element={<IcardiWanda />} />
//       </Routes>
//     </React.Fragment>
//   );
// }
// export default App;
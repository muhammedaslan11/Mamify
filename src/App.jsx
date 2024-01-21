import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Manitpage from "./pages/manit-page/Manitpage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/icardi-wanda" element={<Manitpage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

//   const [data,setData] = useState([])
//   useEffect(() => {
//     const storedValues = JSON.parse(localStorage.getItem("manits"));
//     if (storedValues) {
//       setData(storedValues);
//     }
//   }, [])
//         <Route path={`/${data.boyName}-${data.girlName}`} element={<IcardiWanda />} />

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ClockLoader from "react-spinners/ClockLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
// import BeatLoader from "react-spinners/BeatLoader";
// import ScaleLoader from "react-spinners/ScaleLoader";
// import SyncLoader from "react-spinners/SyncLoader";
import HashLoader from "react-spinners/HashLoader";
import DotLoader from "react-spinners/DotLoader";
import RotateLoader from "react-spinners/RotateLoader";
// import PulseLoader from "react-spinners/PulseLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";






const override =  {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loaderoverride =  {
  display: "block",
  margin:"0 auto",
  marginTop:"20px",
};
const LoaderoverridePropagate =  {
  display: "block",
  alignItem:"center",
  margin:"0 auto",
  marginLeft:"50%",
  marginTop:"30px",

};

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36d7b7");
  const handleColorchange = () =>{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    setColor(`#${randomColor}`)
  }

  return (<>
  <button onClick={ handleColorchange}> changeColor</button>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}

      />

        <ClockLoader 
          loading={loading}  
          cssOverride={Loaderoverride}
          color={color} 
          size={100} />

        <PacmanLoader 
        color={color}
        cssOverride={Loaderoverride}
        size={50} 
        loading={loading}  

         />


         <HashLoader 
         color={color}         
         cssOverride={Loaderoverride}
 />
         <DotLoader 
         color={color}         
         cssOverride={Loaderoverride}
 />
         <RotateLoader 
         color={color}         
         cssOverride={Loaderoverride}
 />
         <PropagateLoader color={color}
          cssOverride={LoaderoverridePropagate}
          />
          <ClimbingBoxLoader 
          color={color} 
          cssOverride={Loaderoverride} />
      </>
  );
}

export default App;

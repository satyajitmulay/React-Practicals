import React from "react";
// import EventProps from "./components/EventProps";
// import EventPropgation from "./components/EventPropgation";
// import EventHandling from "./components/EventHAndling";
// import "./App.css";
// import NetflixSeries from "./components/NetflixSeries";
// import Profile from "./components/Profile";
// import { State }  from "./components/hooks/State";
// import "./components/EV.css";
// import { DerivedState } from "./components/DerivedState";
// import LiftStateUp from "./components/LiftStateUp";
// import ToggleSwitch from "./Projects/ToggleSwitch/ToggleSwitch";
import Todo from "./Projects/Todo/Todo";

function App() {
  return (
    <section>
      <Todo />
    </section>
  );
}


// let age = 16;

// let canWatch = "Watch Now";
// if(age < 18) canWatch = "Not Available";


//You can make this function dynamic by passing parameter

// const canWatch = () =>{
//   if(age>=18) return "Watch Now";
//   return "Not Availble";
// }


// const returnGenre = () =>{
//   const genre =  "RomCom";
//   return genre;

// }

// const NetflixSeries = () => {
//   const name = "Queen of Tears";
//   // const rating =  "8.2";
//   const summary = `Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
//         both at home and at work. But upon deciding his future, Hyun-woo pays a
//         visit to his family.`
// //         if(age <18){
// //   return (
// //     <div>
// //       <div>
// //       <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
// //       </div>
// //       <h2>Name: {name}</h2>
// //       <h3>Rating: {5 + 3.2}</h3>
// //       <p>
// //         Summary: {summary}
// //       </p>
// //       <p>Genre: {returnGenre()}</p>
// //       <button>Not Available</button>
// //     </div>
// //   );
// // }

// return (
//   <div>
//     <div>
//     <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
//     </div>
//     <h2>Name: {name}</h2>
//     <h3>Rating: {5 + 3.2}</h3>
//     <p>
//       Summary: {summary}
//     </p>
//     <p>Genre: {returnGenre()}</p>
//     {/* <button>{age>=18 ? "Watch Now":"Not Available"}</button> */}
//     <button>{canWatch()}</button>
//   </div>
// );
// }

console.log(React.createElement("h1", null, "Hello , Welcome to React 19"));

export default App;

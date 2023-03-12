import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import React from 'react';
import SignInPage from "./pages/SignInPage";
import SubscribtionPlan from "./pages/SubscribtionPlan"
import PublishTenders from "./pages/PublishTenders"
import BizCoin from "./pages/BizCoin"

function App() {

  const[show, setShow] = React.useState(true)
 return (
   <div className="App">
    {show && <nav><Navbar/></nav>}
     
     <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/signup" element={<SignUpPage funcNav={setShow} />} />
     <Route path="/signin" element={<SignInPage funcNav={setShow} />} />
     <Route path="/subscribtion" element={<SubscribtionPlan />} />
     <Route path="/publishtenders" element={<PublishTenders />} />
     <Route path="/bizcoin" element={<BizCoin />} />
    </Routes> 
    {show && <nav><Footer/></nav>}
    
   </div>
 );
}


export default App;
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Rec from "./components/Rec";
import Ava from "./components/Ava";



const App = () => {
  return (
      <div className = 'app-wrapper'>

          <div className="header-wrapper">
             <div className="container">
                <Header/>
             </div>
          </div>

          <div className="container">
          <section className="section">

              <Ava/>
              <Profile/>
              <Rec/>
              <Nav/>

          </section>
          </div>
      </div>



  );
}




export default App;

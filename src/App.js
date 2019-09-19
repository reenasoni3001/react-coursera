import React from "react";
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/menucomponent'
import "./App.css";

function App() {
  return (
    <div className="App">
     <Navbar dark color="primary">
       <div className="container">
         <NavbarBrand href="/">Ristorente Con Fusion</NavbarBrand>
       </div>

     </Navbar>
     <Menu/>

    </div>
  );
}

export default App;

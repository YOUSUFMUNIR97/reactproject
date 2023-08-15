import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import Herosection from './components/Herosection';
import Service from './components/Service';
import Digitalweb from './components/Digitalweb';
import Foam from './components/Foam';
import MDBFooter from './components/MDBFooter';


function App() {

  return (
    <>
     <Navbars/>
     <Herosection/>
     <Service/>
     <Digitalweb/>
     <Foam/>
     <MDBFooter/>
    </>
  )
}

export default App

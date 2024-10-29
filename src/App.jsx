import { useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import NavBar from './components/navbar/NavBar';
import Intro from './components/intro/Intro';
import Cert from './components/Certificates/Cert';
import ContextProvider from './Context';
import { useEffect } from 'react';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
function App() {
  const [user, setUser] = useState('')
  useEffect(()=>{
    let p = prompt('Enter You Name Please');
     setUser(p);
  },[]);
  return (
    <ContextProvider>
      <NavBar/>
      <Banner user={user}/>
      <Intro />
      <Cert />
      <Portfolio />
      <Contact />
    </ContextProvider>
  )
}

export default App

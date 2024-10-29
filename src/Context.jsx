import { createContext } from "react";
import { useState } from 'react';
import resp from './assets/ffcResp.png'
import cppB from './assets/cpp-basics.png'
import cppI from './assets/cpp-relationships.png'
import cppD from './assets/cpp-dsa.png'
import cppC from './assets/cpp-class_obj.png'
import pokeImg from './assets/pokes.jpg'
import bs from './assets/bs.png'
export const appContext = createContext({certificates: [], portfolio: []});

const ContextProvider = ({children}) => {
  const [certs, setCerts] = useState([
    {
      img: resp,
      title: "Responsive Web Design",
      body: "I really enjoyed this freeCodeCamp's responsive web design course it cover all aspects regarding add responsvieness to Web Designs and all foundational and useful concepts of HTML and CSS needed."
    },
    {
      img: cppB,
      title: "Basics of Programming in C++",
      body: "I've learnt basics and foundational concepts of programming with C++.I've learnt to build logics in Programming using concepts such as structural statement, variables, data types, primitive and non-primitive etc..."
    },
    {
      img: cppI,
      title: "Inheritance, Composition and Aggregation with C++",
      body: "I've learnt relationships b/w objects using Inheritance , Aggregation and Composition using classes and objects using access specifiers."
    },
    {
      img: cppC,
      title: "Classes and Objects with C++",
      body: "I've learnt concepts like Classes and Objects in this course and many concepts regarding OOPs concepts."
    },
    {
      img: cppD,
      title: "DSA in C++",
      body: "I've learnt Data Structures and Algorithms with C++ in this course which helped me to improve my logic building and problem solving skills."
    },
    {
      img: bs,
      title: "Responsive Web Design with BootStrap",
      body: "I really enjoyed this infosys responsive web design course with BootStrap it cover all aspects regarding add responsvieness to Web Designs and all foundational and useful concepts Bootstap classes needed."
    },
  ]);
  const [portfolio, setPortfolio] = useState([
    {
      type: "minor",
      projects: [
        {
          name: "Pokemon Search App",
          bio: "Although it was a minor project but I really  learnt a lot while building this web-app such as using fetch API and AJAX programming. ",
          url: 'https://bharat-coder-pro.github.io/learnGit/',
          img: pokeImg,
        },
      ]
    },
    {
      type: "major",
      projects: [],
    },
  ]);
  return(
    <appContext.Provider value={{certs,portfolio}}>
      {children}
    </appContext.Provider>
  )
}
export default ContextProvider
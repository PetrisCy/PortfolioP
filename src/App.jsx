import Nav from "./Components/nav";
import Header from "./Components/Header";
import Scrolling from "./Components/Scrolling";
import Cards from "./Components/Cards.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import React, { useEffect } from "react";
import PageViewDisplay from "./Components/Views/PageViewDisplay.jsx";
import { incrementPageView } from "./sanityClient";

function App() {
  useEffect(() => {
    const slug = "homepage";
    //   const slug = window.location.pathname;
    console.log("Page loaded");

    incrementPageView(slug);
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <Scrolling />
      <Cards />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <PageViewDisplay slug="homepage" />
    </>
  );
}
export default App;

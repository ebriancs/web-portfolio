import React, { useEffect } from "react";
import "./App.scss";
import { GlobalProvider } from "./components/Global";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Certificate from "./components/Certificate";
import Career from "./components/Career";
import Personal from "./components/Personal";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Skill from "./components/Skill";
import Warning from "./components/Warning";
import { getDeviceInfo } from "./utils/getDeviceInfo";

function App() {
  useEffect(() => {
    const deviceInfo = getDeviceInfo();
    console.log("deviceInfo: ", deviceInfo);
  }, []);

  return (
    <GlobalProvider>
      <div className="App">
        <Warning />
        <Header />
        <main className="main-container">
          <Intro />
          <Skill />
          <Project />
          <Career />
          <Certificate />
          <Personal />
          <Contact />
        </main>
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;

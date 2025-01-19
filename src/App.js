import React, { useEffect } from "react";
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
import { sendDeviceData } from "./api/common";
import "./App.scss";

function App() {
  useEffect(() => {
    const fetchDeviceInfo = async () => {
      try {
        const deviceInfo = await getDeviceInfo();
        await sendDeviceData(deviceInfo);
      } catch (error) {
        console.error("ERROR fetchDeviceInfo:", error);
      }
    };
    fetchDeviceInfo();
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

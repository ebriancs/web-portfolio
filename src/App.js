import React, { useEffect } from 'react';
import { GlobalProvider } from './components/Global';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Certificate from './components/Certificate';
import Career from './components/Career';
import Personal from './components/Personal';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Skill from './components/Skill';
import { Warning, ScreenWarning } from './components/Modal';
import { getDeviceInfo } from './utils/getDeviceInfo';
import { sendDeviceData } from './api/common';
import { sendDeviceEmail } from './utils/sendDeviceEmail';
import './App.scss';

function App() {
  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const deviceInfo = await getDeviceInfo();

      if (!deviceInfo) {
        console.error('No device info retrieved');
        return;
      }

      // Send to backend
      sendDeviceData(deviceInfo)
        .then((response) => console.log('sendDeviceData response:', response))
        .catch((err) => console.error('sendDeviceData ERROR:', err));

      // Send via email
      sendDeviceEmail(deviceInfo)
        .then((response) => console.log('sendDeviceEmail response:', response))
        .catch((err) => console.error('sendDeviceEmail ERROR:', err));
    };

    fetchDeviceInfo();
  }, []);

  return (
    <GlobalProvider>
      <div className="App">
        <Warning
          title="Website Under Construction"
          message="I'm working hard to bring this site to life.
                   This is a work in progress. Please click OK to continue browsing."
          btnText="OK"
        />
        <ScreenWarning
          minWidth={1024}
          minHeight={600}
          title="Screen Size Warning"
          message="I'm working hard to bring this site to life.
                   For best experience, please use a larger screen (e.g., Laptop/Desktop). Avoid using mobile
                   devices for now."
        />
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

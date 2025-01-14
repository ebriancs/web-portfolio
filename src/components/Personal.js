import React, { useState, useEffect } from "react";
import "./Personal.scss";

const WEB3 = () => {
  return (
    <div className="web3">
      <p>
        I'm a WEB3 enthusiast actively exploring the decentralized ecosystem. I
        trade cryptocurrencies with a modest capital to refine my analysis
        skills and strategies. Beyond trading, I engage in buying, selling, and
        playing Axies. I also stake tokens and NFTs to earn rewards and
        participate in airdrops.
      </p>
      <p>
        Feel free to check out my inventory if you're interested in buying:
        <br />
        <a
          href="https://app.axieinfinity.com/profile/0x516a61a105694a184538e8f2ab7747def7b165a2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inventory
        </a>
        .
      </p>
    </div>
  );
};

const Cybersec = () => {
  return (
    <div className="cyberSec">
      <p>
        Cybersecurity is a passion of mine and my "shadow career." I've always
        been intrigued by hacking, in all its forms, whether it's white, black,
        or gray hat. While my current path as a developer offers broader
        opportunities, I still find the world of cybersecurity fascinating.
        Although I can't dedicate myself fully to hacking right now, I know that
        being a skilled programmer is a crucial step towards becoming a
        proficient hacker. Who knows what the future holds? Life has a way of
        shaping our paths, and I'm curious to see where mine leads.
      </p>
    </div>
  );
};

const Repair = () => {
  return (
    <div className="repair">
      <p>
        Repairing devices, like phones, is something I want to explore as part
        of my interest in technology. While it’s not the prior of my career, I
        enjoy learning how things work and troubleshooting to fix them. I know
        repair can be challenging, especially with the cost of tools and
        components, but the satisfaction after successfully repairing something
        makes it all worthwhile. It’s a valuable skill that complements my
        passion for tech.
      </p>
    </div>
  );
};

const Music = () => {
  return (
    <div className="music">
      <p>
        I find music theory fascinating. It’s amazing how each sound corresponds
        to specific notes and how keys play a crucial role in playing
        instruments and singing.
        <br />
        <br />I truly believe in the healing power of music, not just
        emotionally, but even scientifically. As Nikola Tesla once suggested,
        "If you want to understand the universe, think in terms of frequency,
        vibration, and energy."
      </p>
      <div className="video-container">
        <iframe
          src="https://drive.google.com/file/d/1mEMgX2jz2y-QZZ-d80KCFhAKimICy350/preview"
          width="250"
          height="150"
          allow="autoplay"
          allowFullScreen
          title="Music Video"
        ></iframe>
      </div>
      <p>
        Music connects us to those universal principles, making it both an art
        and a science.
      </p>
    </div>
  );
};

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesContext = require.context(
    "../assets/gallery",
    false,
    /\.(jpg|jpeg|png)$/
  );
  const imageArray = imagesContext.keys().map((image) => imagesContext(image));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imageArray.length);
      setCurrentIndex(randomIndex);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [imageArray.length]);

  return (
    <div className="gallery">
      <p>
        This is a collection of me. While I’m usually hesitant to share photos
        or content, knowing that only those genuinely visited this site will see
        it gives me confidence. <b>Thanks!</b>
      </p>

      <div className="images-container">
        <img key={currentIndex} src={imageArray[currentIndex]} alt="" />
      </div>
    </div>
  );
};

function Personal() {
  const [openContent, setOpenContent] = useState(null);

  const toggleContent = (index) => {
    setOpenContent(openContent === index ? null : index);
  };

  const contents = [
    {
      title: "WEB3",
      data: <WEB3 />,
    },
    { title: "Cybersec", data: <Cybersec /> },
    { title: "Repair", data: <Repair /> },
    {
      title: "Music",
      data: <Music />,
    },
    { title: "Gallery", data: <Gallery /> },
  ];

  return (
    <div className="Personal" id="personal">
      <div className="texts-container">
        <span>PERSONAL</span>
      </div>

      <div className="container-a">
        {contents.map((content, index) => (
          <div className="group">
            <div className="group-content">
              <h4>{content.title}</h4>

              {openContent === index && content.data}

              <i
                className={`${
                  openContent === index
                    ? "fas fa-chevron-up open"
                    : "fas fa-chevron-down"
                }`}
                onClick={() => toggleContent(index)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personal;

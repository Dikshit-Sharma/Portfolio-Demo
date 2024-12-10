import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Front-End Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const handleDownload = () => {
    // Create a fake link element
    const link = document.createElement("a");
    // Set the href attribute to the path of your PDF file
    link.href = "/home/dikshit-sharma/Documents/Resume/Dikshit_Resume2.pdf";
    // Set the download attribute to prompt download
    link.download = "Dikshit_CV.pdf";
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger a click event on the link
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Dikshit</p>
          <h1 className="hero--section--title">
           a <span className="hero--section-title--color"> {text} </span>
           <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
          </h1>
          <p className="hero--section--description">
            An Information Technology undergraduate at Jaypee University,
            <br />
            specializing in front-end web development.Currently pursuing a
            B.Tech degree.
          </p>
        </div>
        {/* Call handleDownload function when the button is clicked */}
        <button onClick={handleDownload} className="btn btn-primary">
          Download CV
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" style={{borderRadius: "20px"}}/>
      </div>
    </section>
  );
}

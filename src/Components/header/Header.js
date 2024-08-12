//rafec (reactArrowfunctionExportComponent)
import React from "react";
import Typical from "react-typical";
import "./Header.css";
import profileImg from "../../assets/profileImg.png";
const Header = () => {
  return (
    <div className="header-container">
      <div className="text-container">
        <h1 className="foo">Hi! amm</h1>
        <h1 className="poo">Janvi Waghmode</h1>
        <h1 className="loo">
          I'm a {""}
          <Typical
            steps={[
              "Full stack web Developer 😎",
              1000,
              "Penetration tester 😊",
              1000,
              "React Expert 😇",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          ></Typical>
        </h1>
        <p>
          In my journey as a cybersecurity enthusiast, I have cultivated a
          strong proficiency in Java and Python programming languages,
          leveraging their capabilities to tackle diverse challenges in the
          realm of cybersecurity. With a solid foundation in web development,
          particularly adept in React.js, I have honed my skills in creating
          robust and secure web applications. Passionate about exploring the
          intricacies of cybersecurity, I am currently delving into the field of
          penetration testing, aiming to leverage my technical acumen to
          identify and fortify vulnerabilities in digital systems.
        </p>
        <div className="Social-container">
          <button>Hire Me!!</button>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
        </div>
      </div>
      <div className="Image-container">
        <img src={profileImg} alt="profile" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;

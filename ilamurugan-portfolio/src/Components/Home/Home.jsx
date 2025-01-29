import React, { useState } from "react";
import "./Home.css"; // Import your CSS file
import TextChange from "../TextChange"; // Import the TextChange component

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Details Submitted: \nName: ${userDetails.name}\nEmail: ${userDetails.email}\nPhone: ${userDetails.phone}`);
    // You can add logic to handle form submission like sending data to a server
  };

  return (
    <div className="home-section flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>

        <br />
        <p className="text-sm md:text-2xl tracking-tight">
          Hello, I'm Ilamurugan A, a passionate and driven Engineering Discipline
          student currently pursuing my degree at SECE. As an aspiring engineer, I am
          deeply fascinated by CSE(AIML), and my goal is to develop innovative
          solutions to real-world problems. With a strong foundation in both
          theoretical knowledge and hands-on project experience, I aim to bridge the
          gap between creativity and technical expertise to drive impactful change.
        </p>
        <br />
        <button
          onClick={handleButtonClick}
          className="mt-5 md:md-10 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-white"
        >
          Contact Me
        </button>
        {showDetails && (
          <div className="mt-5 bg-gray-100 p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="text-sm md:text-base">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  className="mt-2 px-3 py-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="text-sm md:text-base">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  className="mt-2 px-3 py-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="text-sm md:text-base">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                  className="mt-2 px-3 py-2 border rounded-md w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-5 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-white"
              >
                Submit
              </button>
            </form>
          </div>
        )}
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;

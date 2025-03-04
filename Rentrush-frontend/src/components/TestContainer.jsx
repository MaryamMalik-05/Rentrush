/*import React, { useState } from "react";
import Testimonial from "./Testominial";

function TestContainer() {
  const reviews = [
    {
      name: "Fatimata",
      city: "Islamabad",
      desc: "RentDush made my car rental experience so easy! The online booking was seamless, and I loved the flexibility in pick-up locations. Highly recommended!",
    },
    {
      name: "Saif",
      city: "Lahore",
      desc: "Fantastic service! I loved the variety of cars available and the quick booking process. RentDush is my go-to for rentals!",
    },
    {
      name: "Abdullah",
      city: "Karachi",
      desc: "I couldn't be happier with my experience at RentDush. The team was friendly, and I found the perfect car at an unbeatable price!",
    },
    {
      name: "Sara",
      city: "Quetta",
      desc: "The rental experience was excellent, the car was in perfect condition, and the process was quick and easy.",
    },
    {
      name: "Hassan",
      city: "Peshawar",
      desc: "Great service, affordable prices, and the booking was smooth! I’ll definitely use RentDush again.",
    },
    {
      name: "Ayesha",
      city: "Multan",
      desc: "RentDush saved my day! I needed a car urgently, and the service was fast and reliable. Highly recommend!",
    },
  ];

  // State to track the starting index of testimonials being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Maximum number of testimonials to display at once based on screen size
  const testimonialsPerPage = window.innerWidth <= 640 ? 1 : 3; // 1 for small screens (sm), 3 for medium and above screens

  // Function to handle the Next button click
  const handleNext = () => {
    if (currentIndex + testimonialsPerPage < reviews.length) {
      setCurrentIndex(currentIndex + testimonialsPerPage);
    }
  };

  // Function to handle the Previous button click
  const handlePrevious = () => {
    if (currentIndex - testimonialsPerPage >= 0) {
      setCurrentIndex(currentIndex - testimonialsPerPage);
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-evenly flex-wrap" id="Test">
        {reviews
          .slice(currentIndex, currentIndex + testimonialsPerPage)
          .map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-full md:w-1/3 p-2"
            >
              <Testimonial name={card.name} city={card.city} desc={card.desc} />
            </div>
          ))}
      </div>
      <div className="w-full flex flex-row justify-between px-5 bg-[#2C2C2C] items-center mt-4">
        <div className="flex flex-row gap-3">
          <img
            src="/src/assets/next.png"
            onClick={handlePrevious}
            alt="previous"
            className={`cursor-pointer ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            style={{ filter: "invert(100%)" }}
          />
        </div>
        <div className="flex flex-row gap-4">
          <img
            src="/src/assets/previous.png"
            alt="next"
            onClick={handleNext}
            className={`cursor-pointer ${currentIndex + testimonialsPerPage >= reviews.length ? "opacity-50 cursor-not-allowed" : ""}`}
            style={{ filter: "invert(100%)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default TestContainer;*/


import React, { useState, useEffect } from "react";
import Testimonial from "./Testominial";

function TestContainer() {
  const reviews = [
    {
      name: "Fatima",
      city: "Islamabad",
      desc: "RentRush made my car rental experience so easy! The online booking was seamless, and I loved the flexibility in pick-up locations. Highly recommended!",
    },
    {
      name: "Saif",
      city: "Lahore",
      desc: "Fantastic service! I loved the variety of cars available and the quick booking process. RentRush is my go-to for rentals!",
    },
    {
      name: "Abdullah",
      city: "Karachi",
      desc: "I couldn't be happier with my experience at RentRush. The team was friendly, and I found the perfect car at an unbeatable price!",
    },
    {
      name: "Sawera",
      city: "Quetta",
      desc: "The rental experience was excellent, the car was in perfect condition, and the process was quick and easy.",
    },
    {
      name: "Hassan",
      city: "Peshawar",
      desc: "Great service, affordable prices, and the booking was smooth! I’ll definitely use RentRush again.",
    },
    {
      name: "Ayesha",
      city: "Multan",
      desc: "RentRush saved my day! I needed a car urgently, and the service was fast and reliable. Highly recommend!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(window.innerWidth <= 640 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerPage(window.innerWidth <= 640 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex + testimonialsPerPage < reviews.length) {
      setCurrentIndex(currentIndex + testimonialsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - testimonialsPerPage >= 0) {
      setCurrentIndex(currentIndex - testimonialsPerPage);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-evenly flex-wrap" id="Test">
        {reviews
          .slice(currentIndex, currentIndex + testimonialsPerPage)
          .map((card, index) => (
            <div key={index} className="w-full sm:w-full md:w-1/3 p-4">
              <Testimonial name={card.name} city={card.city} desc={card.desc} />
            </div>
          ))}
      </div>
      <div className="w-full flex flex-row justify-between px-5 bg-white text-black items-center mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 p-2 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          aria-label="Previous testimonials"
        >
          <img
            src="/src/assets/previous.png"
            alt="previous"
            className="h-6 w-6"
            style={{ filter: "invert(100%)" }}
          />
          <span>Previous</span>
        </button>
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(reviews.length / testimonialsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * testimonialsPerPage)}
              className={`h-2 w-2 rounded-full ${currentIndex === index * testimonialsPerPage ? "bg-black" : "bg-gray-300"}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentIndex + testimonialsPerPage >= reviews.length}
          className={`flex items-center gap-2 p-2 ${currentIndex + testimonialsPerPage >= reviews.length ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          aria-label="Next testimonials"
        >
          <span>Next</span>
          <img
            src="/src/assets/next.png"
            alt="next"
            className="h-6 w-6"
            style={{ filter: "invert(100%)" }}
          />
        </button>
      </div>
    </div>
  );
}

export default TestContainer;

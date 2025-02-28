/*import React from "react";
import Navbar from "../customer/Navbar";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "/src/assets/showroom.jpg", alt: "Image 1" },
  { src: "/src/assets/car.jpg", alt: "Image 2" },
  { src: "/src/assets/showroom.jpg", alt: "Image 3" },
  { src: "/src/assets/car.jpg", alt: "Image 4" },
  { src: "/src/assets/showroom.jpg", alt: "Image 5" },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const UserDashboard = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Navbar />
      <div className="mt-6 max-w-screen-lg mx-auto mb-52">
        <div className="h-screen sm:w-auto p-5 lg:p-0">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 p-10 lg:p-0">
          <div
            onClick={() => navigate("/customer/cars")}
            className="border p-6 rounded-lg shadow-lg bg-primary cursor-pointer hover:shadow-xl duration-300 hover:scale-105 transition-transform transform"
          >
            <img
              src="/src/assets/car.jpg"
              alt="Cars"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl text-white font-semibold mb-2">Cars</h2>
            <p className="text-white">Search by car name or car model.</p>
          </div>
          <div
            onClick={() => navigate("/customer/showrooms")}
            className="border p-6 rounded-lg shadow-lg bg-primary cursor-pointer hover:shadow-xl duration-300 hover:scale-105 transition-transform transform"
          >
            <img
              src="/src/assets/showroom.jpg"
              alt="Cars"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl text-white font-semibold mb-2">Showrooms</h2>
            <p className="text-white">Search by showroom name or showroom location.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;*/
/*import React from "react";
import Navbar from "../customer/Navbar";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "/src/assets/showroom.jpg", alt: "Showroom Image" },
  { src: "/src/assets/car.jpg", alt: "Car Image" },
  { src: "/src/assets/showroom.jpg", alt: "Showroom Image" },
  { src: "/src/assets/car.jpg", alt: "Car Image" },
  { src: "/src/assets/showroom.jpg", alt: "Showroom Image" },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
     
      <div
        className={`${className} next-arrow`}  // Corrected template literal usage
        style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
        onClick={onClick}
      />
    );
    
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}  // Fixed syntax
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
  
};

const UserDashboard = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Navbar />
      <div className="mt-6 max-w-screen-lg mx-auto mb-10">
        {/* Carousel Section *//*}
        <div className="sm:w-auto p-5 lg:p-0">
         /*<Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
                  <h2 className="text-white text-3xl font-bold text-center">
                    Discover Your Dream Car
                  </h2>
                </div>
              </div>
            ))}
          </Slider>

        </div>

        {/* Cards Section *//*}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 p-5 lg:p-0">
          <div
            onClick={() => navigate("/customer/cars")}
            className="border p-6 rounded-lg shadow-lg bg-primary cursor-pointer hover:shadow-xl duration-300 hover:scale-105 transition-transform transform"
          >
            <img
              src="/src/assets/car.jpg"
              alt="Cars"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl text-white font-semibold mb-2">Cars</h2>
            <p className="text-white">
              Search by car name or car model.
            </p>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore Cars
              </button>
            </div>
          </div>
          <div
            onClick={() => navigate("/customer/showrooms")}
            className="border p-6 rounded-lg shadow-lg bg-primary cursor-pointer hover:shadow-xl duration-300 hover:scale-105 transition-transform transform"
          >
            <img
              src="/src/assets/showroom.jpg"
              alt="Showrooms"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl text-white font-semibold mb-2">Showrooms</h2>
            <p className="text-white">
              Search by showroom name or location.
            </p>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Find Showrooms
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;*/
import React from "react";
import Navbar from "../customer/Navbar";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Footer from "../Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "/src/assets/showroom.jpg", alt: "Showroom Image" },
  { src: "/src/assets/car.jpg", alt: "Car Image" },
  { src: "/src/assets/showroom.jpg", alt: "Showroom Image" },
  { src: "/src/assets/car.jpg", alt: "Car Image" },
  { src: "/src/assets/showroom.jpg", alt: "Showroom Image" },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const UserDashboard = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Navbar />
      <div className="mt-6 max-w-full mx-0 mb-10">
        {/* Carousel Section */}
        <div className="w-full p-0 lg:p-0 -mt-10">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[600px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
                  <h2 className="text-white text-3xl font-bold text-center">
                    Discover Your Dream Car
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Cards Section */}
        <div  id="cars-section" className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-20 p-5 lg:p-0 max-w-screen-xl mx-auto">
  <div
    id="cars-section"
    onClick={() => navigate("/customer/cars")}
    className="border p-8 rounded-lg shadow-lg bg-primary cursor-pointer hover:shadow-xl duration-300 hover:scale-105 transition-transform transform"
  >
    <img
      src="/src/assets/car.jpg"
      alt="Cars"
      className="w-full h-48 object-cover mb-4 rounded-lg"
    />
    <h2 className="text-3xl text-white font-semibold mb-2">Cars</h2>
    <p className="text-white">Search by car name or car model.</p>
    <div className="mt-4 flex justify-end">
      <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Explore Cars
      </button>
    </div>
  </div>
  <div
    id="showroom-section"
    onClick={() => navigate("/customer/showrooms")}
    className="border p-8 rounded-lg shadow-lg bg-primary cursor-pointer hover:shadow-xl duration-300 hover:scale-105 transition-transform transform"
  >
    <img
      src="/src/assets/showroom.jpg"
      alt="Showrooms"
      className="w-full h-48 object-cover mb-4 rounded-lg"
    />
    <h2 className="text-3xl text-white font-semibold mb-2">Showrooms</h2>
    <p className="text-white">Search by showroom name or location.</p>
    <div className="mt-4 flex justify-end">
      <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Find Showrooms
      </button>
    </div>
  </div>
</div>


      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;

import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import newspaperimage1 from "../assets/newspaperimage1.jpg";
import radio1 from "../assets/radio1.jpg";
import television from "../assets/television.jpg";
import cinema from "../assets/cinema.jpg";
import outofhome from "../assets/outofhome.jpg";
import eventmanagement from "../assets/eventmanagement.jpg";
import socialmediamarketing from "../assets/socialmediamarketing.jpg";
import marketing from "../assets/marketing.jpg";

import men from "../assets/men.jpg";
import women from "../assets/women.jpg";

// import logo1 from "../assets/client1.png";
// import logo2 from "../assets/client2.png";
// import logo3 from "../assets/client3.png";
// import logo4 from "../assets/client4.png";
// import logo5 from "../assets/client5.png";
// import logo6 from "../assets/client6.jpg";

import logo1 from "../assets/Untitled-1.png";
import logo2 from "../assets/Untitled-2.png";
import logo3 from "../assets/Untitled-3.png";
import logo4 from "../assets/Untitled-4.png";
import logo5 from "../assets/Untitled-5.png";
import logo6 from "../assets/Untitled-6.png";
import logo7 from "../assets/Untitled-7.png";
import logo8 from "../assets/Untitled-8.png";
import logo9 from "../assets/Untitled-9.png";
import logo10 from "../assets/Untitled-10.png";
import logo11 from "../assets/Untitled-11.png";
import logo12 from "../assets/Untitled-12.png";
import logo13 from "../assets/Untitled-13.png";
import logo14 from "../assets/Untitled-14.png";
import logo15 from "../assets/Untitled-15.png";
import logo16 from "../assets/Untitled-16.png";
import logo17 from "../assets/Untitled-17.png";
import logo18 from "../assets/Untitled-18.png";
import logo19 from "../assets/Untitled-19.png";
import logo20 from "../assets/Untitled-20.png";

import Footer from "../components/Footer";
import Krossoverr2png from "../assets/Krossoverr2png.png";
import { Link } from "react-router";

const services = [
  {
    title: "Newspaper Advertising",
    image: newspaperimage1,
    description:
      "Target specific demographics through leading newspaper publications.",
  },
  {
    title: "Radio Advertising",
    image: radio1,
    description:
      "Leverage the power of radio to increase market share and drive revenue.",
  },

  {
    title: "Event Management & Road Shows",
    image: eventmanagement,
    description:
      "Plan and execute engaging events and road shows that leave a lasting impression.",
  },
  {
    title: "Television Advertising",
    image: television,
    description:
      "Show and tell a wide audience about your products or services via TV.",
  },
  {
    title: "Cinema Advertising",
    image: cinema,
    description:
      "Engage with a large audience through impactful cinema advertisements.",
  },

  {
    title: "Integrated 360 Marketing",
    image: marketing,
    description:
      "Implement comprehensive marketing solutions across all platforms.",
  },
  {
    title: "Out Of Home",
    image: outofhome,
    description:
      "Promote your brand through strategic outdoor advertising campaigns.",
  },
  {
    title: "Social Media Marketing",
    image: socialmediamarketing,
    description:
      "Build your brand's reputation through effective social media strategies.",
  },
];
const reviews = [
  {
    name: "John Doe",
    role: "CEO, Example Corp",
    review:
      "Krossoverr Brand Solutions helped our brand reach new heights with their innovative marketing strategies.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager, Acme Inc",
    review:
      "Professional and creative team delivering beyond expectations. Highly recommend!",
  },
  {
    name: "Alex Johnson",
    role: "Founder, Startup XYZ",
    review:
      "Their attention to detail and strategic thinking made all the difference in our campaign success.",
  },
];

function Home() {
  // Add these lines at the top inside Home function
  const clientPrevRef = useRef(null);
  const clientNextRef = useRef(null);

  const [clientNavPrev, setClientNavPrev] = useState(null);
  const [clientNavNext, setClientNavNext] = useState(null);

  useEffect(() => {
    if (clientPrevRef.current && clientNextRef.current) {
      setClientNavPrev(clientPrevRef.current);
      setClientNavNext(clientNextRef.current);
    }
  }, [clientPrevRef.current, clientNextRef.current]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [navPrev, setNavPrev] = useState(null);
  const [navNext, setNavNext] = useState(null);

  useEffect(() => {
    SwiperCore.use([Navigation]);
  }, []);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavPrev(prevRef.current);
      setNavNext(nextRef.current);
    }
  }, [prevRef.current, nextRef.current]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Wavy background */}
            <div className="wavy-bg"></div>

            <div className="hero-text-content">
              <img
                src={Krossoverr2png}
                alt="Krossoverr Brand Solutions"
                style={{
                  width: "240px",
                  marginBottom: "1.5rem",
                  filter: "drop-shadow(0 0 4px rgba(0,0,0,0.2))",
                  transition: "filter 0.4s ease-in-out",
                }}
              />
              <h1 className="display-5 fw-bold">
                Empowering Brands with Bold Solutions
              </h1>
              <p className="lead mt-3">
                At <strong>Krossoverr Brand Solutions</strong>, we specialize in
                creating impactful branding, advertising, and marketing
                strategies. From digital content to event activations, MICE to
                corporate gifting, we build compelling brand journeys that
                resonate and perform.
              </p>
              <a href="#services" className="btn btn-lg mt-4 px-5 py-3">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>

          <div
            className="d-flex align-items-center justify-content-center"
            style={{ gap: "10px", maxWidth: "2200px", margin: "0 auto" }}
          >
            {/* Prev Button: Show only on large screens */}
            <button
              ref={prevRef}
              className="btn btn-outline-primary d-none d-lg-inline-flex"
              style={{ height: "40px", flexShrink: 0 }}
            >
              ← Prev
            </button>

            {/* Slider container */}
            <div style={{ flexGrow: 1, minWidth: 0 }}>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                navigation={{ prevEl: navPrev, nextEl: navNext }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                }}
                style={{ width: "100%" }}
                allowTouchMove={true}
                speed={1800}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="card h-100 shadow-sm">
                      <img
                        src={service.image}
                        className="card-img-top img-fluid"
                        alt={service.title}
                      />
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <h5 className="card-title">{service.title}</h5>
                        <p className="card-text">{service.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Next Button: Show only on large screens */}
            <button
              ref={nextRef}
              className="btn btn-outline-primary d-none d-lg-inline-flex"
              style={{ height: "40px", flexShrink: 0 }}
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      <section className="welcome-section py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Left Side Images */}
          <div className="image-stack position-relative mb-4 mb-md-0">
            <img
              src={men}
              alt="Creative Team Collaboration"
              className="img-fluid rounded main-img"
            />
            <img
              src={women}
              alt="Modern Advertising Agency Workspace"
              className="img-fluid rounded overlay-img"
            />
          </div>

          {/* Right Side Text */}
          <div className="ms-md-5 text-section">
            <h2 className="fw-bold">Welcome To Krossoverr Brand Solutions</h2>

            <p className="mt-3">
              We are a brand creativity agency that strives to provide your
              company with a wide range of creative ideas to help your company
              grow and flourish in today’s competitive market.
            </p>
            <p>
              Whether you're a startup or an established enterprise, we bring a
              strategic and thoughtful approach to your brand’s communication.
              Every concept is crafted with precision and backed by industry
              insights, ensuring relevance and maximum impact.
            </p>
            <p>
              At Krossoverr Brand Solutions, we believe branding is more than
              just visuals—it's about telling compelling stories that connect
              with your audience on a deeper level. From logo design and brand
              identity to advertising campaigns and digital content, we turn
              creative thinking into tangible results.
            </p>
            <p>
              Our team of seasoned designers, strategists, and marketers work
              collaboratively to understand your vision and translate it into
              meaningful, measurable outcomes. We align your brand voice with
              the latest trends while staying true to your core values.
            </p>
            <p>
              we’ve proudly supported countless businesses in building their
              presence through personalized service and unmatched creativity.
              Our expertise spans traditional and digital mediums, ensuring your
              message is heard loud and clear across every platform.
            </p>
            <p>
              Let Krossoverr Brand Solutions be the partner that propels your
              brand to new heights. Together, we’ll turn ideas into impact.
            </p>

            <Link to="/about" className="btn btn-maroon mt-3 px-4 py-2">
              ABOUT US
            </Link>
          </div>
        </div>
      </section>
      {/* 
      <section className="client-review-section py-5">
        <div className="container text-center position-relative">
          <h2 className="mb-5 fw-bold text-primary">What Our Clients Say</h2>

          <button
            ref={clientPrevRef}
            className="btn btn-outline-primary position-absolute top-50 start-0 translate-middle-y d-none d-lg-inline-flex"
            style={{ zIndex: 10 }}
            aria-label="Previous Review"
          >
            ←
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={1000}
            navigation={{ prevEl: clientNavPrev, nextEl: clientNavNext }}
            className="client-review-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div
                  className="review-card text-center mx-auto p-4 shadow-sm rounded"
                  style={{ maxWidth: "700px" }}
                >
                  <FaQuoteLeft
                    className="quote-icon mb-3 text-primary"
                    size={40}
                  />
                  <p className="review-text fst-italic">"{review.review}"</p>
                  <h5 className="mt-4 fw-bold">{review.name}</h5>
                  <p className="text-muted">{review.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={clientNextRef}
            className="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y d-none d-lg-inline-flex"
            style={{ zIndex: 10 }}
            aria-label="Next Review"
          >
            →
          </button>
        </div>
      </section> */}

      <section className="choose-us-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">
            Why You Should Choose Us For Your Business
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {[
              {
                icon: "bi-bar-chart-fill",
                title: "Strategic",
                desc: "We bring strategic insight to every campaign, ensuring alignment with your business goals.",
              },
              {
                icon: "bi-lightbulb-fill",
                title: "Creative",
                desc: "Our creativity drives standout designs and messages that resonate with your audience.",
              },
              {
                icon: "bi-cpu-fill",
                title: "Production",
                desc: "In-house production capabilities ensure high-quality outputs across media formats.",
              },
              {
                icon: "bi-truck",
                title: "Deliver",
                desc: "From concept to execution, we deliver on time with precision and excellence.",
              },
            ].map((item, index) => (
              <div className="col d-flex" key={index}>
                <div
                  className="flip-card w-100"
                  style={{ perspective: "1000px", width: "100%" }}
                >
                  <div
                    className="flip-card-inner h-100 position-relative rounded-4 shadow text-center"
                    style={{
                      transition: "transform 0.8s",
                      transformStyle: "preserve-3d",
                      height: "100%",
                    }}
                  >
                    <div
                      className="flip-card-front icon-box h-100 d-flex flex-column justify-content-center align-items-center rounded-4"
                      style={{
                        backfaceVisibility: "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      <i className={`bi ${item.icon} fs-1`}></i>
                      <h5 className="mt-3 fw-semibold">{item.title}</h5>
                    </div>

                    <div
                      className="flip-card-back p-4 bg-primary text-white h-100 d-flex flex-column justify-content-center align-items-center rounded-4"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      <p className="mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
    .flip-card-inner {
      min-height: 280px; /* Same height for all */
    }
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
  `}</style>
      </section>

      <section className="client-slider-section">
        <div className="container text-center">
          <h2 className="client-heading">Our Trusted Clients</h2>
          <div className="swiper-container-wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 6, spaceBetween: 40 },
              }}
            >
              {[
                logo1,
                logo2,
                logo3,
                logo4,
                logo5,
                logo6,
                logo7,
                logo8,
                logo9,
                logo10,
                logo11,
                logo12,
                logo13,
                logo14,
                logo15,
                logo16,
                logo17,
                logo18,
                logo19,
                logo20,
              ].map((logo, idx) => (
                <SwiperSlide key={idx}>
                  <div className="logo-wrapper">
                    <img
                      src={logo}
                      alt={`client-${idx + 1}`}
                      className="client-logo"
                    />
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-button-prev d-none d-md-flex" />
              <div className="swiper-button-next d-none d-md-flex" />
            </Swiper>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Home;

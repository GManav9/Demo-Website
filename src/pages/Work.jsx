import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Work.css";
import workBanner from "../assets/ourwork.jpg";
import workSample from "../assets/work-sample.webp";
import brandImage from "../assets/Picture1.png";
import retailImage from "../assets/Picture2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../assets/campaign1.jpeg";
import slider2 from "../assets/campaign2.jpeg";
import slider3 from "../assets/campaign3.jpeg";
import slider4 from "../assets/campaign4.jpeg";
import slider5 from "../assets/campaign5.jpeg";
import retailBranding from "../assets/retailBranding.png";
import eventsExecution from "../assets/eventsExecution.png";
import goToMarket from "../assets/goToMarket.png";
import digitalMarketing from "../assets/digitalMarketing.png"; 


// import slider6 from "../assets/campaign6.jpeg";
<link rel="preload" as="image" href="/assets/ourwork.jpg" />;

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="work-banner"
        style={{
          backgroundImage: `url(${workBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay">
          <div className="work-text">
            <h1>Our Work</h1>
            <p>
              From powerful brand activations to memorable event experiences —
              our portfolio reflects passion, precision, and purpose.
            </p>
            <a href="#our-projects" className="btn-gradient">
              Explore Projects
            </a>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="work-split expanded">
        {/* Block 1 — Image Left, Text Right */}
        <div className="work-split-container">
          <div className="work-split-image">
            <img src={workSample} alt="Exhibition Work" />
          </div>
          <div className="work-split-content">
            <h5>PROJECT HIGHLIGHT</h5>
            <h2>Exhibition Excellence</h2>
            <p>
              We transformed a blank venue into a full-fledged brand arena —
              with immersive booth setups, LED displays, live demos, and
              audience engagement. Our execution helped the brand connect with
              10,000+ visitors.
            </p>
          </div>
        </div>

        {/* Block 2 — Corporate Gifting (Image Right, Text Left) */}
        <div className="work-split-container reverse">
          <div className="work-split-image">
            <img src={retailImage} alt="Corporate Gift Kit" />
          </div>
          <div className="work-split-content">
            <h5>CORPORATE GIFTING</h5>
            <h2>Branded Welcome Kits</h2>
            <p>
              First impressions matter — and our custom welcome kits prove it.
              From branded T-shirts and bottles to gourmet snacks and
              personalized notes, we design memorable unboxing experiences for
              new employees, clients, and partners. It’s not just a gift; it’s
              your brand story delivered with style.
            </p>
          </div>
        </div>

        {/* ✅ Block 3 — Retail Branding & Activations (Image Left, Text Right) */}
        <div className="work-split-container">
          <div className="work-split-image">
            <img src={retailBranding} alt="Retail Branding Activation" />
          </div>
          <div className="work-split-content">
            <h5>RETAIL BRANDING & ACTIVATIONS</h5>
            <h2>Transforming Retail Spaces</h2>
            <p>
              We create impactful retail branding experiences that connect with
              customers directly where they shop. From storefront displays and
              in-store activations to eye-catching POS materials, our solutions
              drive engagement and boost visibility. Every element is designed
              to make your brand stand out in the retail environment.
            </p>
          </div>
        </div>

        {/* ✅ Block 4 — Events & Execution (Image Right, Text Left) */}
        <div className="work-split-container reverse">
          <div className="work-split-image">
            <img src={eventsExecution} alt="Events & Execution" />
          </div>
          <div className="work-split-content">
            <h5>EVENTS & EXECUTION</h5>
            <h2>Flawless Event Management</h2>
            <p>
              From concept to execution, we deliver high-impact events that
              leave lasting impressions. Whether it’s product launches,
              conferences, or cultural activations, our team ensures seamless
              planning, captivating experiences, and end-to-end execution with
              precision.
            </p>
          </div>
        </div>

        {/* ✅ Block — Go to Market Strategies (Image Left, Text Right) */}
        <div className="work-split-container">
          <div className="work-split-image">
            <img
              src={goToMarket}
              alt="Go to Market Strategies presentation"
              loading="lazy"
            />
          </div>
          <div className="work-split-content">
            <h5>GO TO MARKET</h5>
            <h2>Go to Market Strategies</h2>
            <p>
              Product launch se pehle se lekar scale-up tak — hum market
              research, positioning, pricing, channel planning aur campaign
              rollout ko ek cohesive roadmap me execute karte hain. Target
              audience ke hisaab se messaging, media mix aur POS support design
              karke ROI-driven GTM deliver karte hain.
            </p>
          </div>
        </div>

        {/* ✅ Block — Digital Marketing & Promotions (Image Right, Text Left) */}
        <div className="work-split-container reverse" id="Digital" >
          <div className="work-split-image">
            <img
              src={digitalMarketing}
              alt="Digital Marketing & Promotions"
              loading="lazy"
            />
          </div>
          <div className="work-split-content">
            <h5>DIGITAL MARKETING</h5>
            <h2>Creative Promotions</h2>
            <p>
              Driving engagement through digital-first campaigns — from social
              media creatives and ad campaigns to influencer collaborations and
              performance marketing. We craft visually compelling and
              ROI-focused promotions that put your brand in the spotlight and
              connect with the right audience.
            </p>
          </div>
        </div>
      </section>

      {/* 🔴 Brand Ecosystem Section */}
      <section className="brand-circle-section">
        <div className="container text-center">
          <h2 className="brand-title">Our Brand Ecosystem</h2>
          <div className="brand-circle-image-wrapper">
            <img
              src={brandImage}
              alt="Brand Services Diagram"
              className="brand-circle-image"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h5>GET IN TOUCH</h5>
          <h2>Contact Us For More Detail</h2>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your e-mail" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea rows="5" placeholder="Message" required></textarea>
            <button type="submit" className="btn-gradient">
              Send a message
            </button>
          </form>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="grow-together-section">
        <div className="grow-container">
          <h2>Let's Grow Together !</h2>
          <p>
            We build your dream. We are eagerly waiting to lighten your events
            with our innovation.
          </p>
          <a href="/contact" className="grow-btn">
            Contact Us
          </a>
        </div>
      </section>

      <section className="work-slider">
        <h2 className="slider-title">Our Campaign Gallery</h2>

        <div className="slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={false}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="custom-swiper"
          >
            {[slider1, slider2, slider3, slider4, slider5].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Campaign ${i + 1}`}
                  className="slider-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="custom-prev">‹</div>
          <div className="custom-next">›</div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Work;

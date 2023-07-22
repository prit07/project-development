import React, { useEffect, useState } from "react";
import TestiMonialsDetails from "./TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import userPic from "../../assets/image/service-1.jpg";

import "./TestiMonials.css";

const TestiMonials = () => {
  const testiMonials = [
    {
      name: "Rekob Ramya",
      description:
        "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magnaut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo seaclita.",
      img: "https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg",
    },
    {
      name: "Brandon Savage",
      description:
        "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magnaut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo seaclita.",
      img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
    },
    {
      name: "Steve Burns",
      description:
        "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magnaut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo seaclita.",
      img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
    },
    {
      name: "Kevin Canlas",
      description:
        "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magnaut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo seaclita.",
      img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 4500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <section id="testimonial" className="testimonials bg-white py-5">
      <div className="container mt-5 text-center ">
        <p className=" text-uppercase text-Primary fw-bold">Testimonial</p>
        <h2 className=" fw-bold text-blue fs-1">What Our Clients Say!</h2>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {testiMonials.length === 0 ? (
                <div className="item ">
                  <div className=" ">
                    <img className="img-circle" src={userPic} />
                  </div>
                  <div className="effect bg-black ">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                    <h5>Rekob Ramya</h5>
                  </div>
                </div>
              ) : (
                testiMonials.map((testiMonialDetail) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={testiMonialDetail._key}
                    />
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiMonials;

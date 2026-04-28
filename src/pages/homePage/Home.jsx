import React from "react";
import { Button } from "../../components/ui/Button";
import Hero from "../../components/component/hero-section/Hero";
import MostPicked from "../../components/component/most-picked/MostPicked";
import HotelTypes from "../../components/component/hotels/HotelTypes";

const Home = () => {
  return (
    <>
      <Hero />
      <MostPicked />
      <HotelTypes />
    </>
  );
};

export default Home;

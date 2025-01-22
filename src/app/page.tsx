'use client';
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Range from "./Components/Range";
import RoomSlider from "./Components/RoomSlider";
import FeedbackPage from "./feedback/page";



export default function Home() {
  return (
   <div className=" " >
    <Navbar/>
    <HeroSection/>
    <Range/>
    <FeedbackPage/>
    <Products/>
    <RoomSlider/>
    <Gallery/>
    <Footer/>
   </div>
  );
}
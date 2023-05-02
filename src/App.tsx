import AboutSection from "./components/AboutSection";
import BookingSection from "./components/BookingSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigations from "./components/Navigations";
import PopUp from "./components/PopUp";
import StorySection from "./components/StorySection";
import TourSection from "./components/TourSection";

function App() {
  return (
    <>
      <Navigations />
      <Header />
      <AboutSection />
      <FeaturesSection />
      <TourSection />
      <StorySection />
      <BookingSection />
      <Footer />
      <PopUp />
    </>
  );
}

export default App;

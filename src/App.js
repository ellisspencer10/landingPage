import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import AboutInner from "./components/AboutInner";
import Features from "./components/Features";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Header provides navigation and brand identity */}
      <Header />

      {/* Banner serves as the hero section to engage visitors */}
      <Banner />

      {/* About Us sections introduce the company's mission */}
      <AboutUs />
      <AboutInner />

      {/* Features and Services showcase key offerings and options */}
      <Features />
      <Service />

      {/* Portfolio displays examples of work or product highlights */}
      <Portfolio />

      {/* Team section introduces team members and builds credibility */}
      <Team />

      {/* Blog provides informative content and engages with audience */}
      <Blog />

      {/* Footer contains contact information and essential links */}
      <Footer />
    </div>
  );
}

export default App;

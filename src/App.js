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
      <Header />
      <Banner />
      <AboutUs />
      <AboutInner />
      <Features />
      <Service />
      <Portfolio />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import Editor from "./components/Editor";
import Speed from "./components/Speed";
import Free from "./components/Free";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="header-hero-wrapper">
        <div className="header-hero-bg-pattern"></div>
        <Header />
        <Hero />
      </div>
      <Editor />
      <Speed />
      <Free />
      <Footer />
    </>
  );
}

export default App;

import { useState, useCallback, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Editor from "./components/Editor";
import Speed from "./components/Speed";
import Free from "./components/Free";
import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  const [visibleDropdownId, setVisibleDropdownId] = useState(null);
  const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);

  const toggle_mobile_navbar_visibility = useCallback(() => {
    setIsMobileNavbarVisible(is_visible => !is_visible);
  }, []);

  const toggle_visible_dropdown_id = useCallback(
    event => {
      const id = parseInt(event.currentTarget.dataset.id);
      const clicked_on_title = event.target.classList.contains("header-dropdown-title");
      setVisibleDropdownId(visibleDropdownId === id && clicked_on_title ? null : id);
    },
    [visibleDropdownId]
  );

  const handle_outside_dropdown_click = useCallback(event => {
    const dropdown_element = event.target.closest(".header-dropdown");
    if (dropdown_element === null) setVisibleDropdownId(null);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handle_outside_dropdown_click);
    return () => document.removeEventListener("click", handle_outside_dropdown_click);
  }, [handle_outside_dropdown_click]);

  return (
    <>
      <div className="header-hero-wrapper">
        <div className="header-hero-bg-pattern"></div>
        <Header
          visibleDropdownId={visibleDropdownId}
          toggle_visible_dropdown_id={toggle_visible_dropdown_id}
          isMobileNavbarVisible={isMobileNavbarVisible}
          toggle_mobile_navbar_visibility={toggle_mobile_navbar_visibility}
        />
        <Hero />
      </div>
      <Editor />
      <Speed />
      <Free />
      <Footer />
      <MobileNavbar
        toggle_visible_dropdown_id={toggle_visible_dropdown_id}
        visibleDropdownId={visibleDropdownId}
        isMobileNavbarVisible={isMobileNavbarVisible}
      />
    </>
  );
}

export default App;

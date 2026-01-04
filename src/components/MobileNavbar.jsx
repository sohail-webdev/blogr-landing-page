import { useState, useEffect, useCallback } from "react";
import navbar_icon from "../assets/images/icon-navbar.svg";
import close_icon from "../assets/images/icon-close.svg";

const dropdowns = [
  { id: 1, title: "Product", options: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"] },
  { id: 2, title: "Company", options: ["About", "Team", "Blog", "Careers"] },
  { id: 3, title: "Connect", options: ["Contact", "Newsletter", "LinkedIn"] },
];

const MobileNavbar = () => {
  const [visibleDropdownId, setVisibleDropdownId] = useState(null);
  const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);

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
      <button className="button toggle-navbar-button" onClick={() => setIsMobileNavbarVisible(prev => !prev)}>
        <img src={isMobileNavbarVisible ? close_icon : navbar_icon} alt="" />
      </button>
      <div className={`mobile-navbar-container${isMobileNavbarVisible ? " visible" : ""}`}>
        <div className="mobile-navbar">
          <div className="header-nav-dropdowns-container">
            {dropdowns.map(dropdown => (
              <li
                className={`header-dropdown${visibleDropdownId && dropdown.id === visibleDropdownId ? " visible" : ""}`}
                key={dropdown.title}
                onClick={() => setVisibleDropdownId(dropdown.id)}
              >
                <a className="header-dropdown-title">
                  {dropdown.title}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 7" className="header-dropdown-arrow-icon">
                    <path fill="none" stroke="#FF7B86" strokeWidth="2" d="M1 1l4 4 4-4" />
                  </svg>
                </a>
                <ul className="header-dropdown-options-container">
                  <div className="header-dropdown-options-wrapper-container">
                    <div className="header-dropdown-options-wrapper">
                      {dropdown.options.map(option => (
                        <li className="header-dropdown-option" key={option}>
                          <a>{option}</a>
                        </li>
                      ))}
                    </div>
                  </div>
                </ul>
              </li>
            ))}
          </div>
          <div className="horizontal-separator"></div>
          <div className="header-buttons">
            <button className="button header-login-button">Login</button>
            <button className="button header-signup-button">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;

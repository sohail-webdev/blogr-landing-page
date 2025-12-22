const dropdowns = [
  { id: 1, title: "Product", options: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"] },
  { id: 2, title: "Company", options: ["About", "Team", "Blog", "Careers"] },
  { id: 3, title: "Connect", options: ["Contact", "Newsletter", "LinkedIn"] },
];

const MobileNavbar = ({ toggle_visible_dropdown_id, visibleDropdownId, isMobileNavbarVisible }) => {
  return (
    <div className={`mobile-navbar-container${isMobileNavbarVisible ? " visible" : ""}`}>
      <div className="mobile-navbar">
        <div className="header-nav-dropdowns-container">
          {dropdowns.map(dropdown => (
            <li
              className={`header-dropdown${visibleDropdownId && dropdown.id === visibleDropdownId ? " visible" : ""}`}
              key={dropdown.title}
              onClick={toggle_visible_dropdown_id}
              data-id={dropdown.id}
            >
              <a className="header-dropdown-title">
                {dropdown.title}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 7" className="header-dropdown-arrow-icon">
                  <path fill="none" stroke="#FF7B86" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </a>
              <ul className="header-dropdown-options-container">
                {dropdown.options.map(option => (
                  <li className="header-dropdown-option" key={option}>
                    <a>{option}</a>
                  </li>
                ))}
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
  );
};

export default MobileNavbar;

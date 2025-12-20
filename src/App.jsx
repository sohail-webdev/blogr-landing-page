import { useState, useCallback } from "react";
import Header from "./components/Header";

function App() {
  const [visibleDropdownId, setVisibleDropdownId] = useState(null);

  const toggle_visible_dropdown_id = useCallback(
    event => {
      const id = parseInt(event.currentTarget.dataset.id);
      setVisibleDropdownId(visibleDropdownId === id ? null : id);
    },
    [visibleDropdownId]
  );

  return (
    <>
      <div className="header-hero-wrapper">
        <div className="header-hero-bg-pattern"></div>
        <Header visibleDropdownId={visibleDropdownId} toggle_visible_dropdown_id={toggle_visible_dropdown_id} />
      </div>
    </>
  );
}

export default App;

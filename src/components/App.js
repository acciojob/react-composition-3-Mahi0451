
import React from "react";
import './../styles/App.css';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text="Tooltip text">
        <span className="tooltip">Hover over me</span>
      </Tooltip>
    </div>
  )
}

export default App

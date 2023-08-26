import React, { useState } from 'react';
import SustainabilityNumber from '../components/gdsiDisplay';

function App() {
  // State to store the keyword entered in the search bar
  const [searchKeyword, setSearchKeyword] = useState('');

  // Handler function to handle the Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Process the search query here
      setSearchKeyword(event.target.value); // Update searchKeyword
    }
  };

  return (
    <div>
      <h1>Sustainability Number App</h1>
      <div>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Enter a country and press Enter"
          onKeyDown={handleKeyPress} // Add the key press handler
        />
        {/* Render the SustainabilityNumber component with the search keyword */}
        <SustainabilityNumber country={searchKeyword} />
      </div>
    </div>
  );
}

export default App;

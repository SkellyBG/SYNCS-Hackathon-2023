import React, { useState, useEffect } from 'react';

function SustainabilityNumber({ country }: { country: string }) {
  // State to store the fetched number
  const [sustainabilityNumber, setSustainabilityNumber] = useState(null);

  // Effect to fetch data when the component mounts or when 'country' prop changes
  useEffect(() => {
    // Define the API URL
    const apiUrl = `http://localhost:3100/api/sustainability/${country}`;

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => {
        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // Set the fetched number in the state
        setSustainabilityNumber(data['overall-index']);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [country]); // Run the effect whenever 'country' prop changes

  return (
    <div>
      {sustainabilityNumber === null ? (
        <p>Loading...</p>
      ) : sustainabilityNumber === undefined ? (
        <p> Not a valid city! </p>
      ) : (
        <p>Sustainability Number for {country}: {sustainabilityNumber}</p>
      )}
    </div>
  );
}

export default SustainabilityNumber;

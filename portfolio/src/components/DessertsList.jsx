import React from "react";

const DessertsList = ({ data }) => {
  // Filter desserts with less than or equal to 500 calories
  const filteredData = data.filter((item) => item.calories <= 500);

  // Sort desserts by calories in ascending order
  const sortedData = filteredData.sort((a, b) => a.calories - b.calories);

  return (
    <div>
      <ul>
        {sortedData.map((item,index) => (
          <li key={index}>
            {item.name} - {item.calories} cal
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DessertsList;

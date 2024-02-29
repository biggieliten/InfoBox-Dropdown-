import { useState } from "react";
import cars from "../DropDown/cars.json";
import CarInfoBox from "../InfoBox/InfoBox";

const DropDown = () => {
  //   const data = cars.data;

  const [selectedCar, SetSelectedCar] = useState([]);

  const handleChange = (event) => {
    //När man kör med event.target.value måste man lägga till value för option som är = index.
    const selectedIndex = event.target.value;
    console.log(selectedIndex);

    const showSelected = cars[selectedIndex];

    SetSelectedCar(showSelected);
    console.log(showSelected);
  };

  return (
    <>
      <select onChange={handleChange} name="carDropDown" id="">
        {cars.map((car, index) => {
          return (
            <>
              <option value={index}>{car.brand}</option>;
            </>
          );
        })}
      </select>
      {selectedCar && <CarInfoBox car={selectedCar} />}
    </>
  );
};

export default DropDown;

// import peopleData from "./peopleData.json";
import { useState } from "react";
import peopleData from "./peopleData.json";
import InfoBox from "../InfoBoxComp/InfoBoxComp";

const DropDownComp = () => {
  const data = peopleData.data;
  const [selectedPerson, setSelectedPerson] = useState(data[-1]);

  const handleChange = (event) => {
    const selected = event.target.selectedIndex - 1;
    const selectedPerson = data[selected];
    setSelectedPerson(selectedPerson);
  };

  return (
    <>
      <div>
        <select onChange={handleChange} name="peopleList" id="select-person">
          <option value="">Choose a person</option>
          {data.map((person, index) => {
            return (
              <>
                <option key={index} value={person.firstname}>
                  {person.firstname}
                </option>
              </>
            );
          })}
        </select>
        {selectedPerson && <InfoBox person={selectedPerson} />}
      </div>
    </>
  );
};
export default DropDownComp;

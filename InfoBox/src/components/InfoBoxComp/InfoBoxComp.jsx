import "../InfoBoxComp/InfoBoxComp.css";

const InfoBox = ({ person }) => {
  return (
    <div class="InfoBox">
      <h1>name: {person.firstname}</h1>
      <p>lastName={person.lastname}</p>
      <p>pantcolor={person.pant_color}</p>
      <p>favFood={person.favorite_food}</p>
      <p>favTool={person.favorite_tool}</p>
      <p>pet={person.pet}</p>
      <p>hobby={person.hobby}</p>
    </div>
  );
};

export default InfoBox;

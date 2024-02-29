import "../InfoBoxComp/InfoBoxComp.css";

const InfoBox = ({ person }) => {
  return (
    <div className="InfoBox">
      <h1>Name: {person.firstname}</h1>
      <p>LastName: {person.lastname}</p>
      <p>Pantcolor: {person.pant_color}</p>
      <p>FavFood: {person.favorite_food}</p>
      <p>FavTool: {person.favorite_tool}</p>
      <p>Pet: {person.pet}</p>
      <p>Hobby: {person.hobby}</p>
    </div>
  );
};

export default InfoBox;

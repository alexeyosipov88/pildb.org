
import TreatiesListItem from "./TreatiesListItem";

const TreatiesList = (props) => {
  let id = 1;
  const listOfTreaties = props.treaties.map((elem) => {
    return (
      <TreatiesListItem
        key={elem.id}
        id={id++}
        name={elem.name}
        city={elem.city}
        concluded={elem.concluded}
      />
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name of the treaty</th>
          <th>City:</th>
          <th>Date signed:</th>
          <th>Check status:</th>
        </tr>
      </thead>
      <tbody>{listOfTreaties}</tbody>
    </table>

    // <div>
    //  {listOfTreaties}
    // </div>
  );
};
export default TreatiesList;

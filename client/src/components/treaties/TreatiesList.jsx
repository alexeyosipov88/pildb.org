import TreatiesListItem from "./TreatiesListItem";

const TreatiesList = (props) => {
  let id = 1;
  if (props.treaties && props.treaties.length > 0) {
    props.treaties.sort((a, b) => {
      if (a.concluded > b.concluded) {
        return 1;
      } else if (a.concluded < b.concluded) {
        return -1;
      } else return 0;
    });
  }
  const listOfTreaties = props.treaties.map((elem) => {
    return (
      <TreatiesListItem
        key={elem.id}
        tableId={id++}
        id={elem.id}
        name={elem.name}
        city={elem.city}
        concluded={elem.concluded}
      />
    );
  });
  const tableHead = (
    <thead>
      <tr>
        <th>Id</th>
        <th>Name of the treaty</th>
        <th>City:</th>
        <th>Date signed:</th>
        <th>Check status:</th>
      </tr>
    </thead>
  );
  return (
    <table>
      {listOfTreaties.length > 0  &&  tableHead}
      <tbody>{listOfTreaties}</tbody>
    </table>
  );
};
export default TreatiesList;

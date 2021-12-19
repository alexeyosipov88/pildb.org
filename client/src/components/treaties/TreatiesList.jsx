import TreatiesListItem from "./TreatiesListItem";

const TreatiesList = (props) => {
  let id = 1;
  if (props.treaties && props.treaties.length > 0) {
    props.treaties.sort((a, b) => {
      console.log(a.concluded, "this is a");
      console.log(b.concluded, "this is b");
      if (a.concluded > b.concluded) {
        return 1;
      } else if (a.concluded < b.concluded) {
        return -1;
      } else return 0;
    });
  }
  console.log(props.treaties);
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

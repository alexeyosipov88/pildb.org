const ParticipationListItem = (props) => {
  const dateSigned = new Date(props.signed).toLocaleDateString("en-GB");
  const dateConcluded = new Date(props.concluded).toLocaleDateString("en-GB");

  return (
    <article>
      <header>
        <p>{props.country_name}</p>
      </header>
      <footer>
        <div>
          <div>Date signed: {dateSigned}</div>
          <div>Date entered into force: {dateConcluded}</div>
        </div>
      </footer>
    </article>
  );
};
export default ParticipationListItem;

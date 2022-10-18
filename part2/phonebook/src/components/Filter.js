function Filter(props) {
  return (
    <div>
      filter shown with:{" "}
      <input
        value={props.value}
        onChange={(e) => props.setFilter(e.target.value)}
      />
    </div>
  );
}

export default Filter;

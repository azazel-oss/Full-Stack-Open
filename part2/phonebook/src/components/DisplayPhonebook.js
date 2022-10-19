import { deletePerson } from "../services/persons";

function DisplayPhonebook({ persons, onDelete }) {
  function deletePersonHandler(id) {
    const confirmation = window.confirm("Delete this contact?");
    if (confirmation)
      deletePerson(id)
        .then(() => onDelete(id))
        .catch((err) => console.error(err));
  }
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={() => deletePersonHandler(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default DisplayPhonebook;

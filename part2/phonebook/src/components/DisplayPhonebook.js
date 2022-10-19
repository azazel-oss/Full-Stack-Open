import { deletePerson } from "../services/persons";

function DisplayPhonebook({ persons, onDelete, setFlashMessage }) {
  function deletePersonHandler({ name, id }) {
    const confirmation = window.confirm("Delete this contact?");
    if (confirmation)
      deletePerson(id)
        .then(() => onDelete(id))
        .catch(() => {
          setFlashMessage({
            message: `${name} already deleted from the server`,
            type: "failure",
          });
          setTimeout(() => {
            setFlashMessage("");
          }, 3000);
        });
  }

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={() => deletePersonHandler(person)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default DisplayPhonebook;

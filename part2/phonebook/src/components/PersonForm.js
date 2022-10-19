import { useState } from "react";
import { addPerson, updatePerson } from "../services/persons";

function PersonForm({ persons, setPersons }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  function nameInputChangeHandler(event) {
    setNewName(event.target.value);
  }

  function numberInputChangeHandler(event) {
    setNewNumber(event.target.value);
  }
  function addNameHandler(event) {
    event.preventDefault();
    let existingPerson = persons.find(
      (item) => item.name.toLowerCase() === newName.toLowerCase()
    );
    if (existingPerson) {
      const confirmation = window.confirm(
        `${newName} is already added to phonebook, replace the old number with new number?`
      );
      if (confirmation)
        updatePerson(existingPerson.id, {
          name: existingPerson.name,
          number: newNumber,
        }).then((response) => {
          setPersons((prevState) =>
            prevState.map((person) => {
              if (person.id === existingPerson.id) {
                return response.data;
              }
              return person;
            })
          );
          setNewName("");
          setNewNumber("");
        });
      return;
    }
    addPerson({ name: newName, number: newNumber }).then((response) => {
      setPersons([...persons, response.data]);
      setNewName("");
      setNewNumber("");
    });
  }
  return (
    <form onSubmit={addNameHandler}>
      <div>
        name: <input value={newName} onChange={nameInputChangeHandler} />
      </div>
      <div>
        number: <input value={newNumber} onChange={numberInputChangeHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;

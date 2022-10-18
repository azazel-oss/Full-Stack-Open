import { useState } from "react";

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
    if (
      persons.find((item) => item.name.toLowerCase() === newName.toLowerCase())
    ) {
      alert(`${newName} is already added`);
      return;
    }
    setPersons([
      ...persons,
      { name: newName, number: newNumber, id: Math.random() },
    ]);
    setNewName("");
    setNewNumber("");
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

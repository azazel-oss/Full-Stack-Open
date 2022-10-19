import { useEffect, useState } from "react";
import DisplayPhonebook from "./components/DisplayPhonebook";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import { fetchAllPersons } from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");

  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  function deleteHandler(id) {
    setPersons((prevState) => prevState.filter((person) => person.id !== id));
  }

  useEffect(() => {
    fetchAllPersons().then((data) => setPersons(data.data));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} setFilter={setFilter} />
      <h2>Add new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <DisplayPhonebook persons={personsToShow} onDelete={deleteHandler} />
    </div>
  );
};

export default App;

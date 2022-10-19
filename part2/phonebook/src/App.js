import { useEffect, useState } from "react";
import DisplayPhonebook from "./components/DisplayPhonebook";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import { fetchAllPersons } from "./services/persons";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [flashMessage, setFlashMessage] = useState({});

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
      {flashMessage.message && (
        <div className={`flash flash__${flashMessage.type}`}>
          {flashMessage.message}
        </div>
      )}
      <Filter value={filter} setFilter={setFilter} />
      <h2>Add new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setFlashMessage={setFlashMessage}
      />
      <h2>Numbers</h2>
      <DisplayPhonebook
        persons={personsToShow}
        onDelete={deleteHandler}
        setFlashMessage={setFlashMessage}
      />
    </div>
  );
};

export default App;

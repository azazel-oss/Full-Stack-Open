import axios from "axios";

export function fetchAllPersons() {
  return axios.get("http://localhost:3001/persons");
}

export function addPerson(person) {
  return axios.post("http://localhost:3001/persons", person);
}

export function updatePerson(id, person) {
  return axios.put(`http://localhost:3001/persons/${id}`, person);
}

export function deletePerson(id) {
  return axios.delete("http://localhost:3001/persons/" + id);
}

import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />

      <h2>Filter</h2>
      <Filter />

      <h2>Contacts</h2>
      <Contacts />
    </div>
  );
}

export default App;

import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsTitle } from './ContactsTitle/ContactsTitle';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { name } = data;
    const isExist = this.state.contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChangeFilter = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterLowerCase)
    );
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Phonebook title="Phonebook">
          <ContactsForm addContact={this.addContact} />
          <ContactsTitle title="Contacts" />
          <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
          <Contacts
            contacts={this.getFilterContacts}
            onRemoveContact={this.removeContact}
          />
        </Phonebook>
      </>
    );
  }
}

export default App;

import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './App.styled';
import { GlobalStyles } from 'styles/globalStyles.styled';
import { Contacts, Form, Filter, Section, Notification } from '../index';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filteredName: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.some(c => c.name === name)) {
      alert(`Contact ${name} already exists!`);
      return;
    }
    if (contacts.some(c => c.number === number)) {
      alert(`Contact ${number} already exists!`);
      return;
    }

    this.setState({
      contacts: [{ id: nanoid(4), name, number }, ...contacts],
    });
  };

  deleteContact = contactId => {
    const newContacts = this.state.contacts.filter(c => c.id !== contactId);
    this.setState({ contacts: newContacts });
  };

  handleFilter = event => {
    this.setState({ filteredName: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filteredName } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteredName.toLowerCase())
    );
  };

  render() {
    const { contacts, filteredName } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Form onSubmit={this.addContact} />
        <Section title="Contacts">
          {contacts.length > 0 ? (
            <Contacts
              contacts={filteredContacts}
              deleteContact={this.deleteContact}
            >
              {contacts.length > 1 ? (
                <Filter value={filteredName} filterChange={this.handleFilter} />
              ) : (
                ''
              )}
            </Contacts>
          ) : (
            <Notification message="There are no contacts in the phonebook yet..." />
          )}
        </Section>
        <GlobalStyles />
      </Container>
    );
  }
}

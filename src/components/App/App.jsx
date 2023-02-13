import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container, Title } from './App.styled';
import { GlobalStyles } from 'styles/globalStyles.styled';
import { Contacts, Form, Filter, Section, Notification } from '../index';

export class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
    filteredName: '',
  };

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

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
        <Title>Phonebook</Title>
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

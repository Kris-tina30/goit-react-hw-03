import React from 'react';
import Contact from './Contact';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contacts={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

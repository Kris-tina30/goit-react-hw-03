import React from 'react';
import css from './Contact.module.css';

function Contact({ contacts: { number, id, name }, onDeleteContact }) {
  return (
    <div className={css.contact}>
      <div className={css.contactWrap}>
        <div className={css.contactData}>
          <p>💆 {name}</p>
        </div>
        <div className={css.contactData}>
          <p>📞 {number}</p>
        </div>
      </div>
      <button className={css.buttonDelete} type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;

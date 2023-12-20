import { ContactsList, ContactsItem, ButtonDelete } from './Contacts.styled';

export const Contacts = ({ contacts, onRemoveContact }) => {
  const contactsList = contacts();
  return (
    <ContactsList>
      {contactsList.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name}: {contact.number}
          {
            <ButtonDelete
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </ButtonDelete>
          }
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

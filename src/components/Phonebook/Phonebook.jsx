import { PhonebookContainer, PhonebookTitle } from './Phonebook.styled';

export const Phonebook = ({ children, title }) => {
  return (
    <PhonebookContainer>
      <PhonebookTitle>{title}</PhonebookTitle>
      {children}
    </PhonebookContainer>
  );
};

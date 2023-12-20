import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  padding: 0;
  margin: 0;
  max-width: 400px;
`;

export const ContactsItem = styled.li`
  background-color: transparent;
  border: 1px solid #671ae6;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
`;

export const ButtonDelete = styled.button`
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #671ae6;
  background: #efe8fc;
`;

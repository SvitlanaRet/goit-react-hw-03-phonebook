import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, ButtonForm } from './ContactsForm.styled';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addContact } = this.props;

    addContact({ ...this.state });

    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            required
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
          ></Input>
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            required
            placeholder="Enter phone number"
            value={this.state.number}
            onChange={this.handleChange}
          ></Input>
        </Label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    );
  }
}

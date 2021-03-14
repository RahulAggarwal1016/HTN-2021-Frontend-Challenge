import React from 'react';
import { Form } from 'semantic-ui-react';

const SearchBar = ({ input, onChange }) => {
  const onSubmit = () => console.log('Searching');
  return (
    <Form onSubmit={onSubmit}>
      <h2>Search for an Event </h2>
      <Form.Field>
        <Form.Input
          placeholder="search by event title or type"
          name="body"
          value={input}
          onChange={(e) => onChange(e.target.value)}
        />
      </Form.Field>
    </Form>
  );
};

export default SearchBar;

import PropTypes from 'prop-types';

import { List, Item, Text } from './Contacts.styled';
import { Button } from 'components/Form/Form.styled';

export function Contacts({ contacts, deleteContact, children }) {
  return (
    <>
      {children}
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Text>
              {name}: <span>{number}</span>
            </Text>
            <Button
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
  children: PropTypes.node,
};

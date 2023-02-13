import PropTypes from 'prop-types';

import { Label, Span, Input } from 'components/Form/Form.styled';

export function Filter({ value, filterChange }) {
  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input
        type="text"
        name="filterName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={filterChange}
      />
    </Label>
  );
}
Filter.propTrypes = {
  value: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { Wrapper, Title } from './Section.styled';

export function Section({ title, children, titlePosition = 'start' }) {
  return (
    <Wrapper>
      <Title titlePosition={titlePosition}>{title}</Title>
      {children}
    </Wrapper>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  titlePosition: PropTypes.string,
};

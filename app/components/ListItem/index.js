import React from 'react';
import Wrapper from './Wrapper';

const ListItem = ({ item }) => (
  <Wrapper>
    {item}
  </Wrapper>
);

ListItem.propTypes = {
  item: React.PropTypes.any,
};

export default ListItem;

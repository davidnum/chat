import React from 'react';
import Wrapper from './Wrapper';
import Item from './Item';

const ListItem = ({ item }) => (
  <Wrapper>
    <Item>
      {item}
    </Item>
  </Wrapper>
);

ListItem.propTypes = {
  item: React.PropTypes.any,
};

export default ListItem;

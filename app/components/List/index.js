import React from 'react';
import Wrapper from './Wrapper';
import Ul from './Ul';

const List = ({ component, items }) => {
  const ComponentToRender = component;
  let content = (<div></div>);

  if (items) {
    content = items.map((item, index) =>
      <ComponentToRender key={`item-${index}`} item={item} />
    );
  } else {
    content = <ComponentToRender />;
  }
  return (
    <Wrapper>
      <Ul>
        {content}
      </Ul>
    </Wrapper>
  );
};

List.propTypes = {
  items: React.PropTypes.array,
  component: React.PropTypes.func.isRequired,
};

export default List;

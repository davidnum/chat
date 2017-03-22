import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Avatar from 'material-ui/Avatar';
import { makeSelectCurrentUser } from '../App/selectors';
import { formatDate } from '../../utils/date';
import ListItem from '../../components/ListItem';
import { Wrapper, Header, Content, Title, Date, Body } from './styled';

export class MessageListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const message = this.props.item;
    const content = (
      <Wrapper>
        <Avatar size={35} src={message.user.avatar} />
        <Content>
          <Header>
            <Title>
              {message.user.name}
            </Title>
            <Date>
              {formatDate(message.created_at)}
            </Date>
          </Header>
          <Body>
            {message.text}
          </Body>
        </Content>
      </Wrapper>
    );
    return (
      <ListItem key={message.id} item={content} />
    );
  }
}

MessageListItem.propTypes = {
  item: React.PropTypes.object,
  currentUser: React.PropTypes.object,
  onChatClick: React.PropTypes.func,
};


export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
}))(MessageListItem);

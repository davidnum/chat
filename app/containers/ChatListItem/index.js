import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Avatar from 'material-ui/Avatar';
import { makeSelectCurrentUser } from '../App/selectors';
import {formatDate} from '../../utils/date';
import ListItem from '../../components/ListItem';
import { Wrapper, Header, Content, Title, Date, Body } from './styled'

export class ChatListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const chat = this.props.item;
    const content = (
      <Wrapper>
        <Avatar size={50} src={chat.last_message.user.avatar} />
        <Content>
          <Header>
            <Title>
              {chat.last_message.user.name}
            </Title>
            <Date>
              {formatDate(chat.last_message.created_at)}
            </Date>
          </Header>
          <Body>
            {chat.last_message.text}
          </Body>
        </Content>
      </Wrapper>
    );
    return (
      <ListItem key={chat.id} item={content} />
    );
  }
}

ChatListItem.propTypes = {
  item: React.PropTypes.object,
  currentUser: React.PropTypes.object,
};

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
}))(ChatListItem);

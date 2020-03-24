import React from 'react';
import styled from 'styled-components';
import isUserMessage from '../../utils/isUserMessage';

const StyledArticle = styled.article`
  width: 100%;
`;

interface Props {
  messages: [];
  currentUser: {} | null;
}

const MessagesList: React.FC<Props> = ({ messages, currentUser }) => {
  return (
    <>
      {messages.map(({ user, message, id }) => (
        <StyledArticle key={id}>{isUserMessage(currentUser, user, message)}</StyledArticle>
      ))}
    </>
  );
};

export default MessagesList;

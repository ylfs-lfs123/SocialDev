import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../atoms/Input/Input';
import useUser from '../../hooks/useUser';

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10rem;
`;

const StyledCommentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.fontColorText};
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 30px;
  padding: 0.7rem 4rem;
  margin-left: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const AddComment = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const inputRef = useRef(null);
  useUser(setCurrentUser);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleContentChange = ({ target: { value } }) => setContent(value);

  const handleSubmit = e => {
    e.preventDefault();
    const { userName } = currentUser.authUser;
    onCreate(content, userName);
    setContent('');
  };

  return (
    <StyledFormWrapper>
      <StyledCommentWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="content"
            value={content}
            name="content"
            onChange={handleContentChange}
            ref={inputRef}
          />
        </StyledForm>
        <StyledButton type="submit" onClick={handleSubmit}>
          Comment
        </StyledButton>
      </StyledCommentWrapper>
    </StyledFormWrapper>
  );
};

AddComment.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default AddComment;
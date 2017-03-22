import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 72px;
  border: 1px solid #ccc;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  height: 36px;
  width: 300px;
  font-size: 11pt;
  word-break: break-word;
  outline: 0;
  border-radius: 3px;
  padding: 8px;
`;

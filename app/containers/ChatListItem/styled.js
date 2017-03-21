import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;
  margin-left: 16px;
  padding-bottom: 8px;
`;

export const Date = styled.span`
  margin-right: 16px;
  font-size: 8pt;
  color: #777e8c;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: bold;
`;

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  padding: 8px 16px;
  border-bottom: 1px solid #d8d8d8;
  
  &:hover {
    background-color: #f5f7fa;
  }
`;

export const Body = styled.span`
  font-size: 10pt;
  margin-bottom: 8px;
`;

export default {
  Content,
  Date,
  Header,
  Title,
  Wrapper,
};

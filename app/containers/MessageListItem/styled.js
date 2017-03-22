import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;
  margin-left: 16px;
  padding-bottom: 8px;
`;

export const Date = styled.span`
  font-size: 8pt;
  color: #777e8c;
  margin-left: 8px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 10pt;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 16px;

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

import styled from 'styled-components';

export const CommentItem = styled.div`
    border-radius: 10px;
    display: block;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 10px;
    height: 100px; /* Set a fixed height */
    background-color: #dbd8d0;
    box-shadow: 3px 10px 3px ${props => props.theme.shadowColor};
`;

export const CommentText = styled.div`
    display: flex;
    height: 40px;
    color: black;
    font-family: 'Roboto';
    font-size: ${props => props.theme.textSizeTextM};
    align-items: center;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const CommentContent = styled.div`
    display: flex;
    justify-content: space-between;   
    padding: 10px;
`;

export const UserName = styled.div`
  display: flex;
  height: 30px;
  color: black;
  font-family: 'Roboto';
  font-size: 20px;
  font-weigh:
  align-items: center;
  @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const deleteButton = styled.button`
    display: flex;
    flex: 0 0 auto;
    height: 30px;
    padding: 5px;
`;
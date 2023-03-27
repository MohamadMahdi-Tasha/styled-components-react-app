// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Comment Author Image Styled Component
const CommentContentComponent = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 25px;
  
  @media (max-width: 991px) {
    padding: 2rem 0;
    justify-content: center;
    align-items: center;
    h6, p {text-align: center;}
  }
`

// Exporting 'CommentContentComponent' Variable
export default CommentContentComponent;
// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Comment Styled Component
const CommentComponent = styled.div`
  border-radius: 1rem;
  background-color: ${({theme}) => theme.colors.slate800};
  overflow: hidden;
  display: flex;
`

// Exporting 'CommentComponent' Variable
export default CommentComponent;
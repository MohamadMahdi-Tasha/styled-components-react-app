// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Comment Author Image Styled Component
const CommentAuthorImageComponent = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;

  @media (max-width: 991px) {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-inline: auto;
    margin-top: 1rem;
  }
`

// Exporting 'CommentAuthorImageComponent' Variable
export default CommentAuthorImageComponent;
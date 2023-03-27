// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Comment Author Image Styled Component
const ParagraphComponent = styled.p`
  font-size: ${({fontSize}) => `${fontSize}px`};
  font-weight: ${({fontWeight}) => fontWeight};
  color: ${({color}) => color};
  margin-bottom: ${({marginBottom}) => `${marginBottom}px`};
  margin-top: ${({marginTop}) => `${marginTop}px`};
  line-height: ${({lineHeight}) => `${lineHeight}px`};
`

// Exporting 'CommentAuthorImageComponent' Variable
export default ParagraphComponent;
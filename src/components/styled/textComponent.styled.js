// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Text Styled Component
const TextComponent = styled.h6`
    font-size: ${({fontSize}) => `${fontSize}px`};
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color};
    margin-bottom: ${({marginBottom}) => `${marginBottom}px`};
    margin-top: ${({marginTop}) => `${marginTop}px`};
  
    > a {color: ${({theme}) => theme.colors.cyan500};}
`

// Exporting 'TextComponent' Variable
export default TextComponent;
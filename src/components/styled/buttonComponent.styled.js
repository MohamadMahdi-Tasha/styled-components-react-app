// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Button Component Styled Component
const ButtonComponent = styled.button`
  border: 1px solid;
  padding: .75rem 1rem;
  border-radius: .5rem;
  margin-right: ${({marginRight}) => `${marginRight}px`};
  ${
    (props) => {
      if (props.type === 'primary') {
        return `
          border-color: white;
          background-color: white;
          color: black;
          
          &:hover {
            background-color: black;
            border-color: black;
            color: white;            
          }
        `
      } else {
        return `
          border-color: white;
          background-color: transparent;
          color: white;
          
          &:hover {
            background-color: white;
            border-color: white;
            color: black;            
          }
        `
      }
    }
  }
`

// Exporting 'ButtonComponent' Variable
export default ButtonComponent;
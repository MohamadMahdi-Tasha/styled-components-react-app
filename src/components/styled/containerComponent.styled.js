// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Comment Styled Component
const ContainerComponent = styled.div`
  max-width: 1000px;
  margin-inline: auto;
  padding: 3rem;
  
  @media (max-width: 991px) {  padding: 1rem;  }
`

// Exporting 'ContainerComponent' Variable
export default ContainerComponent;
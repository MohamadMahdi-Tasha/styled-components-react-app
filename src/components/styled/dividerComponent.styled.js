// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Divider Component Styled Component
const DividerComponent = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.colors.slate600};
`

// Exporting 'DividerComponent' Variable
export default DividerComponent;
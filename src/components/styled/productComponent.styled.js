// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Product Component Styled Component
const ProductComponent = styled.div`
  margin-bottom: 40px;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.colors.slate800};
  overflow: hidden;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`

// Exporting 'ProductComponent' Variable
export default ProductComponent;
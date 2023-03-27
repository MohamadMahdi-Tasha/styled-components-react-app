// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Product Image Component Styled Component
const ProductImageComponent = styled.img`
  width: 225px;
  height: 300px;
  object-fit: cover;
  
  @media (max-width: 991px) {
    width: 100%;
    height: 300px;
  }
`

// Exporting 'ProductImageComponent' Variable
export default ProductImageComponent;
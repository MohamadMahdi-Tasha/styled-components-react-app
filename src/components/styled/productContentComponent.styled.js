// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Product Content Component Styled Component
const ProductContentComponent = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (max-width: 991px) {
    gap: 20px;
  }
`

// Exporting 'ProductContentComponent' Variable
export default ProductContentComponent;
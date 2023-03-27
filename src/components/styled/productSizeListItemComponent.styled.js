// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating Product Component Styled Component
const ProductSizeListItemComponent = styled.button`
  width: 40px;
  height: 40px;
  color: white;
  border: none;
  border-radius: .5rem;
  font-size: 15px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.selected) ? `background-color: ${props.theme.colors.slate900};` : `background-color: transparent;`}
`

// Exporting 'ProductSizeListItemComponent' Variable
export default ProductSizeListItemComponent;
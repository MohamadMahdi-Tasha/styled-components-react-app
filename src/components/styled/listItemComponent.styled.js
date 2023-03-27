// Codes By Mahdi Tasha
// Importing Part
import styled from 'styled-components';

// Creating List Item Styled Component
const ListItemComponent = styled.li`
  padding: .5rem 1rem;
  background-color: ${({theme}) => theme.colors.slate600};
  color: white;
  border-radius: 10rem;
  font-weight: 300;
  font-size: 15px;
  transition: .3s;
  
  &:hover {background-color: ${({theme}) => theme.colors.slate400};}
`

// Exporting 'ListItemComponent' Variable
export default ListItemComponent;
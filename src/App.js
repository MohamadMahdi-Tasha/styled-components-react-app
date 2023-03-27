// Codes By Mahdi Tasha
// Importing Part
import ContainerComponent from './components/styled/containerComponent.styled';
import TopSideInfoComponent from "./components/topSideInfoComponent";

// Exporting Whole App Which is Functional Component As Default
export default function App() {
  // returning JSX
  return (
      <div id="App">
        <ContainerComponent>
            <TopSideInfoComponent />
        </ContainerComponent>
      </div>
  );
}
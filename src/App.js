// Codes By Mahdi Tasha
// Importing Part
import ContainerComponent from './components/styled/containerComponent.styled';
import TopSideInfoComponent from "./components/topSideInfoComponent";
import CommentHolderComponent from "./components/commentHolderComponent";
import ProductHolderComponent from "./components/productHolderComponent";

// Exporting Whole App Which is Functional Component As Default
export default function App() {
    // returning JSX
    return (
        <ContainerComponent>
            <TopSideInfoComponent/>
            <CommentHolderComponent />
            <ProductHolderComponent />
        </ContainerComponent>
    );
}
// Codes By Mahdi Tasha
// Importing Part
import { useSelector } from "react-redux";
import ContainerComponent from './components/styled/containerComponent.styled';
import TopSideInfoComponent from "./components/topSideInfoComponent";
import CommentComponent from "./components/styled/commentComponent.styled";
import CommentAuthorImageComponent from "./components/styled/commentAuthorImageComponent.styled";
import CommentContentComponent from "./components/styled/commentContentComponent.styled";
import ParagraphComponent from "./components/styled/paragraphComponent.styled";

// Exporting Whole App Which is Functional Component As Default
export default function App() {
    // Getting Redux State
    const store = useSelector(state => state);
    const commentState = store.comment;

    // returning JSX
    return (
        <div id="App">
            <ContainerComponent>
                <TopSideInfoComponent/>
                <CommentComponent>
                    <CommentAuthorImageComponent src={commentState.img} alt={commentState.author}/>
                    <CommentContentComponent>
                        <ParagraphComponent fontSize={15} fontWeight={400} color={'white'} lineHeight={20} marginTop={0} marginBottom={30}>{commentState.content}</ParagraphComponent>
                    </CommentContentComponent>
                </CommentComponent>
            </ContainerComponent>
        </div>
    );
}
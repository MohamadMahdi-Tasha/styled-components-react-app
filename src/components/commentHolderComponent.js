// Codes By Mahdi Tasha
// Importing Part
import { useSelector } from "react-redux";
import CommentComponent from "./styled/commentComponent.styled";
import CommentAuthorImageComponent from "./styled/commentAuthorImageComponent.styled";
import CommentContentComponent from "./styled/commentContentComponent.styled";
import ParagraphComponent from "./styled/paragraphComponent.styled";
import TextComponent from "./styled/textComponent.styled";

// Exporting Comment Holder Component Which is Functional Component As Default
export default function CommentHolderComponent() {
    // Getting Redux State
    const store = useSelector(state => state);
    const commentState = store.comment;

    // returning JSX
    return(
        <CommentComponent>
            <CommentAuthorImageComponent src={commentState.img} alt={commentState.author}/>
            <CommentContentComponent>
                <ParagraphComponent fontSize={15} fontWeight={400} color={'white'} lineHeight={25} marginTop={0} marginBottom={0}>{commentState.content}</ParagraphComponent>
                <div>
                    <TextComponent fontSize={18} fontWeight={300} color={({theme}) => theme.colors.cyan500} marginTop={0} marginBottom={10}>{commentState.author}</TextComponent>
                    <TextComponent fontSize={18} fontWeight={300} color={({theme}) => theme.colors.slate600} marginTop={0} marginBottom={18}>{commentState.job}, {commentState.company}</TextComponent>
                </div>
            </CommentContentComponent>
        </CommentComponent>
    );
}

// Codes By Mahdi Tasha
// Importing Part
import TextComponent from "./styled/textComponent.styled";
import ListComponent from "./styled/listComponent.styled";
import ListItemComponent from "./styled/listItemComponent.styled";

// Exporting Top Side Component Which is Functional Component As Default
export default function TopSideInfoComponent() {
    // returning JSX
    return(
        <div>
            <TextComponent fontSize={18} fontWeight={300} color={'white'} marginTop={0} marginBottom={20}>This Page Is Made With :</TextComponent>
            <ListComponent>
                <ListItemComponent>React</ListItemComponent>
                <ListItemComponent>Redux</ListItemComponent>
                <ListItemComponent>Styled Components</ListItemComponent>
                <ListItemComponent>JavaScript</ListItemComponent>
                <ListItemComponent>HTML</ListItemComponent>
                <ListItemComponent>CSS</ListItemComponent>
                <ListItemComponent>Some Ideas Of Tailwind Website</ListItemComponent>
            </ListComponent>
            <TextComponent fontSize={40} fontWeight={900} color={'white'} marginTop={50} marginBottom={18}>By Mahdi Tasha</TextComponent>
            <TextComponent fontSize={18} fontWeight={300} color={'white'} marginTop={0} marginBottom={30}>
                Based On Some Components In
                <a target='_blank' href="https://www.tailwindcss.com">Tailwind Website</a>
            </TextComponent>
        </div>
    );
}

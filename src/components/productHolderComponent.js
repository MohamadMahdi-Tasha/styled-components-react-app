// Codes By Mahdi Tasha
// Importing Part
import { useSelector, useDispatch} from "react-redux";
import ProductComponent from "./styled/productComponent.styled";
import ProductImageComponent from "./styled/productImageComponent.styled";
import ProductContentComponent from "./styled/productContentComponent.styled";
import TextComponent from "./styled/textComponent.styled";
import ProductSizeListComponent from "./styled/productSizeListComponent.styled";
import ProductSizeListItemComponent from './styled/productSizeListItemComponent.styled'
import DividerComponent from './styled/dividerComponent.styled'
import ButtonComponent from './styled/buttonComponent.styled'
import { actionsOfAppSlice } from '../store/index';

// Exporting Product Holder Component Which is Functional Component As Default
export default function ProductHolderComponent() {
    // Getting Redux State
    const store = useSelector(state => state);
    const dispatch = useDispatch();
    const productState = store.product;

    // returning JSX
    return(
        <ProductComponent>
            <ProductImageComponent src={productState.img} alt={productState.name}/>
            <ProductContentComponent>
                <TextComponent fontSize={18} fontWeight={300} color={'white'} marginTop={0} marginBottom={0}>{productState.name}</TextComponent>
                <TextComponent fontSize={18} fontWeight={300} color={({theme}) => theme.colors.slate400} marginTop={0} marginBottom={0}>In stock</TextComponent>
                <ProductSizeListComponent>
                    {productState.sizes.map((item, index) => (
                        <li key={index}>
                            <ProductSizeListItemComponent
                                onClick={() => dispatch(actionsOfAppSlice.setProductSizes(item))}
                                selected={(item === productState.selectedSize) ? true : false}
                            >
                                {item}
                            </ProductSizeListItemComponent>
                        </li>
                    ))}
                </ProductSizeListComponent>
                <DividerComponent />
                <div>
                    <ButtonComponent marginRight={10} type={'primary'}>Buy Now</ButtonComponent>
                    <ButtonComponent
                        marginRight={0}
                        type={'secondary'}
                        onClick={() => dispatch(actionsOfAppSlice.setProductWithBag())}
                    >
                        {(productState.isInBag) ? 'Added To Bag' : 'Add To Bag'}
                    </ButtonComponent>
                </div>
                <TextComponent fontSize={18} fontWeight={300} color={({theme}) => theme.colors.slate400} marginTop={0} marginBottom={0}>Free shipping on all continental US orders.</TextComponent>
            </ProductContentComponent>
        </ProductComponent>
    );
}

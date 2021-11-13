import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Info = styled.div` 
    opacity:0;
    width: 100%;   
    height:100%;
    top:0;
    left:0;
    z-index:3;
    display:flex;
    background-color:rgba(0,0,0,0.2);
    justify-content:center;
    align-items:center;
    position: absolute;
    transition: all 0.5s ease;
    cursor: pointer;


`

const Container = styled.div`
    display:flex;
    flex:1;
    margin 5px;
    min-width: 280px;
    height:380px;
    justify-content:center;
    align-items:center;
    background-color:#f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity:1;
      }

`
const Circle = styled.div`
    width: 200px;
    height:200px;
    display:flex;
    border-radius: 500px;
    background-color: white;
    justify-content:center;
    align-items:center;
    position: absolute;

`
const Image = styled.img`
    height:75%;
    z-index:2;

`
const Icons = styled.div`
    width: 40px;    
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    margin 5px;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
      }


`

const Product = ({ items }) => {
    return (
        <Container>
            <Circle />
            <Image src={items.img} />
            <Info>
                <Icons>
                    <ShoppingCartOutlined />
                </Icons>
                <Icons>
                    <SearchOutlined />
                </Icons>
                <Icons>
                    <FavoriteBorderOutlined />
                </Icons>
            </Info>
        </Container>
    )
}

export default Product

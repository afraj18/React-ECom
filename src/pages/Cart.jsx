import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Footer from '../components/Footer';


const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1``
const Top = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding:10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "Filled" && "none"};
    background-color:${props => props.type === "Filled" ? "Black" : "transparent"};
    color:${props => props.type === "Filled" && "White"};

`
const TopTexts = styled.div``
const TopText = styled.span`
text - decoration: underline;
cursor: pointer;
margin: 0px 10px;
`
const Bottom = styled.div``

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>
                            Cart Items (4)
                        </TopText>
                        <TopText>
                            Wish List (0)
                        </TopText>
                    </TopTexts>
                    <TopButton type="Filled">Checkout Now</TopButton>
                </Top>
                <Bottom></Bottom>
            </Wrapper>

            <Footer />
        </Container>
    )
}

export default Cart


import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';


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
    border: ${props => props.type === "Filled" ? "none" : "1px solid gray"};
    background-color:${props => props.type === "Filled" ? "Black" : "transparent"};
    color:${props => props.type === "Filled" && "White"};

`
const TopTexts = styled.div``
const TopText = styled.span`
text - decoration: underline;
cursor: pointer;
margin: 0px 10px;
`
const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
`
const Info = styled.div`
    flex:3
`

const Product = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 20px;
`
const ProductDetails = styled.div`
    flex:2;
    display: flex;


`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    margin-left:20px;
`
const ProductTitle = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px; 
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
`
const ProductSize = styled.span``

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
  font-weight: 200;
`
const Hr = styled.hr`
    background-color:black;

`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`


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
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
                                <Details>
                                    <ProductTitle><b>Product Name : </b>Gray</ProductTitle>
                                    <ProductId><b>Product ID : </b>7247CS</ProductId>
                                    <ProductColor color="Black" />
                                    <ProductSize><b>Product Size : </b>7</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2 </ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>
                                    Rs. 750
                                </ProductPrice>
                            </PriceDetails>
                        </Product>
                        {  /* Product 02 */}
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src="https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388" />
                                <Details>
                                    <ProductTitle><b>Product Name: </b>T-Shirt</ProductTitle>
                                    <ProductId><b>Product ID: </b>3212TSX</ProductId>
                                    <ProductColor color="yellow" />
                                    <ProductSize><b>Product Size: </b>26</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>5 </ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>
                                    Rs.1550
                                </ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>

                </Bottom>
            </Wrapper>

            <Footer />
        </Container>
    )
}

export default Cart





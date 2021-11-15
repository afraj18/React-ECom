import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``

const Wrapper = styled.div`
    display:flex;
    padding:50px;
`
const ImageContainer = styled.div`
    flex:1   
    `
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;

`

const InfoContainer = styled.div`
    flex:1 

`
const Title = styled.h1`
    font-weight:200;
`
const Desc = styled.p`
    margin:20px 0px;
`
const Price = styled.span`
    font-weight:100;
    font-size:30px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div` 
    display:flex;
    align-items:center;
    
`
const FilterTitle = styled.div`
    margin-right:20px;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    margin-right:5px;
    background-color:${props => props.color};
    cursor:pointer;
`
const FilterSize = styled.select`
    padding:20px;   
`
const FilterSizeOption = styled.option``



const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"></Image>
                </ImageContainer>
                <InfoContainer>
                    <Title>Cap</Title>
                    <Desc>Best quality caps. On good and discount price</Desc>
                    <Price>Rs. 750</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color : </FilterTitle>
                            <FilterColor color="Gray" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="Black" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size : </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>


                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product

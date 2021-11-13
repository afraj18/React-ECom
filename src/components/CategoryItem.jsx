import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position: relative;
`
const Image = styled.img`
    width :100%;
    height:100%;
    object-fit:cover;
    
`
const Info = styled.div`
    width:100%;
    height:100%;
    top:0;
    left:0;
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;   
`
const Title = styled.h1`
    color:white;
    font-weight: bold;
    margin-bottom: 20px;
`
const Button = styled.button`
    background-color : white;
    color: black;
    font-size: 20px;
    padding:  5px;
    border : none;
    cursor:pointer;
`

const CategoryItem = ({ items }) => {
    return (
        <Container>
            <Image src={items.img} />
            <Info>
                <Title>{items.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem

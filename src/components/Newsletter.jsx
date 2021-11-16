import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive'

const Container = styled.div`
    
    height:60vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:#fcf5f5;
`
const Title = styled.h1`
    font-size : 60px;
    font-weight:500;
    margin-bottom: 20px;    
`
const Description = styled.div`
    font-size : 20px;
    font-weight:300;
    margin-bottom: 15px;
    ${mobile({ textAlign: "center" })}    
`
const InputContainer = styled.div`
    justify-content:space-between;
    width:50%;
    height:40px;
    display:flex;
    background-color:white;
    border:1px solid grey;
    ${mobile({ width: "80%" })}
`
const Input = styled.input`
    padding-left:20px;
    border:none;
    flex:8;
    
`
const Button = styled.button`
    flex:1;
    background:teal;
    color:white;
    border: none;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get all the latest news on time!!</Description>
            <InputContainer>
                <Input placeholder="Your Mail Address" />
                <Button><Send></Send></Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter

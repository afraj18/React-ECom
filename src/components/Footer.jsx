import { Facebook, Instagram, Mail, Phone, Room, Twitter, WhatsApp } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive'

const Container = styled.div`
    display:flex;
    height: 30vh;
    margin:20px; 
    ${mobile({ flexDirection: "column" })}   
`
const Left = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;

`
const Logo = styled.h1`
    margin-left:0px 20px;
`
const Description = styled.p`
    margin:20px 5px;
`

const SocialContainer = styled.div`
    display:flex;    
`
const SocialIcon = styled.div`
    display:flex;
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    Background-color: #${props => props.color};
    justify-content:center;
    align-items:center;
    margin-right:20px;
    cursor:pointer;
    
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none" })}

`
const Title = styled.h3`
    margin-bottom : 30px;    
`
const List = styled.ul`
    margin:0px;
    padding:0px;
    list-style:none;
    display:flex;
    flex-wrap: wrap;
`
const ListItems = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor:pointer;
`

const Right = styled.div`
    flex:1;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
    margin-bottom :10px;
    display:flex;
    align-items:center;
    cursor:pointer;
`



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SJ STORE</Logo>
                <Description>Thanks for visiting our store </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <WhatsApp />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title> Usefull Links</Title>
                <List>
                    <ListItems>Home</ListItems>
                    <ListItems>Cart</ListItems>
                    <ListItems>WishList</ListItems>
                    <ListItems>Payment</ListItems>
                    <ListItems>News</ListItems>
                    <ListItems>Latest</ListItems>
                    <ListItems>Tech</ListItems>
                    <ListItems>Contact</ListItems>
                </List>
            </Center>
            <Right>
                <Title>Address</Title>
                <ContactItem><Room /> Colombo,Sri Lanka</ContactItem>
                <ContactItem><Phone /> 076 xxx xxxx</ContactItem>
                <ContactItem><Mail /> axxxxxx@gmail.com</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer

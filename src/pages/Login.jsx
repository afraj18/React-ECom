import styled from 'styled-components';

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    
    background: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
      ),
      url("https://i.ibb.co/7W6pG9d/artem-beliaikin-Np7-V88-Hd8-Es-unsplash.jpg")
        center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
`
const Wrapper = styled.div`
    width:30%;
    padding: 20px;
    Background:white;
    border-radius:20px;

`
const Title = styled.h1`
    font-size:25px;
    font-weight:300;
`
const Form = styled.form`
    display: flex;
    flex-direction:column;
    
`
const Input = styled.input`
    min-width:40%;
    margin :10px 0px;
    flex:1;
    padding :10px;

`

const Button = styled.button`
    width:40%;
    font-size:16px;
    background:teal;
    border:none;
    border-radius:2%;
    color:white;
    cursor:pointer;
    padding: 15px 20px;
    margin-bottom:20px
    
`

const Link = styled.a`
    
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
const BR = styled.br``

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />

                    <Button>Login</Button>

                </Form>
                <Link>Forget Password</Link> <BR />
                <Link>CREATE A NEW ACCOUNT</Link>
            </Wrapper>
        </Container>
    )
}

export default Login

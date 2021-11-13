import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    font-size: 14px;
    font-weight:500px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Announcement = () => {
    return (
        <Container>
            Free Shipping on 11.11
        </Container>
    )
}

export default Announcement

import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from "./CategoryItem"
import { mobile } from '../responsive'

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    padding :20px;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`


const category = () => {
    return (
        <Container>
            {categories.map(items => (
                <CategoryItem items={items} key={items.id} />

            ))}
        </Container>
    )
}

export default category

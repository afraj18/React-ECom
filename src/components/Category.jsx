import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    padding :20px;
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

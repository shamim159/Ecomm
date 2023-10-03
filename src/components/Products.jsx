import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
//flex wrap  above fits items on one page
const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) =>(
            <Product item={item} key={item.id}/>
            ))}
        </Container>
    );
};
//key above is the ID from the data
export default Products;
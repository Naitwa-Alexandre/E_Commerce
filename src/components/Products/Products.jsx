import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://cdn.hswstatic.com/gif/barefoot-run-shoe-1.jpg'},
    {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://ibcdn.canaltech.com.br/VKcx7ohXhyUoi_aajZYRNf5pVrc=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i413119.png'},
    {id: 3, name: 'Cup', description: 'Coffe Cup.', price: '$1.5', image: 'https://images-na.ssl-images-amazon.com/images/I/717jo4rq9AL._SL1500_.jpg'},
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}


export default Products;
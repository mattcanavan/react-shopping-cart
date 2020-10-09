import React, { useContext } from 'react';

// Components
import Product from './Product';
import { ShopContext } from '../contexts/ProductContexts'

const Products = () => {
	//lets consume data from context obj rather than props
	//context hook pattern
	// - import context object
	// - call the context hook and pass in the context obj (will return value)
	const productsCntx = useContext(ShopContext);
	return (
		<div className="products-container">
			{productsCntx.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={productsCntx.products.addItem}
				/>
			))}
		</div>
	);
};

export default Products;

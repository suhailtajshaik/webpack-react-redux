import PropTypes from 'prop-types';
import React from 'react';
import ProductRow from './ProductRow';

const products = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];
const tax = 0.1;//

const ProductTable = ({ filter, toggle, onToggle }) => {
    const rows = [];
    const taxRows = [];

    products
        .filter(product => product.stocked)
        .forEach((p) => {
            const nameLC = p.name.toLowerCase();
            const filterLC = filter.toLowerCase();

            if (nameLC.indexOf(filterLC) !== -1) {
                rows.push(
                    <ProductRow key={p.name} data={p} />
                );
                taxRows.push(
                    <ProductRow key={p.name} data={p} tax={tax} />
                );
            }
        });

    return (
        <div>
            <button onClick={onToggle}>Toggle Price</button>
            {toggle ? rows : taxRows}
        </div>);
};

ProductTable.propTypes = {
    filter: PropTypes.string,
    toggle: PropTypes.bool,
    onToggle: PropTypes.func
};

export default ProductTable;

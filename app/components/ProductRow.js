import PropTypes from 'prop-types';
import React from 'react';
import * as classes from '../styles/productRow.scss';

const ProductRow = ({ data, tax = 0 }) => {
    return (
        <div>
            <p>{data.name} = <span className={classes.priceColor}>{'$' + (data.price.slice(1) * (1 + tax)).toFixed(2)} </span></p>
        </div>
    );
};


ProductRow.propTypes = {
    data: PropTypes.object,
    tax: PropTypes.number
};

export default ProductRow;

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { filterTable, togglePrice } from '../actions';
import ProductTable from '../components/ProductTable';
import { filterableTable } from '../styles/filterableTable.scss';

const FilterableTable = ({ filter, onFilter, onToggle, toggle }) => {
    let input;

    return (
        <div className={filterableTable}>
            <input
                value={filter}
                ref={node => {input = node;}}
                onChange={() => onFilter(input.value)} />

            <ProductTable filter={filter} onToggle={onToggle} toggle={toggle}/>
        </div>
    );
};

FilterableTable.propTypes = {
    filter: PropTypes.string,
    toggle: PropTypes.bool,
    onFilter: PropTypes.func,
    onToggle: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter,
        toggle: state.toggle
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText)),
        onToggle: () => dispatch(togglePrice())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterableTable);

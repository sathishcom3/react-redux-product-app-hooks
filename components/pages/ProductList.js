import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProdList = ({ products }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Product Code</th>
        <th>Product Description</th>
      </tr>
    </thead>
    <tbody>
      {products.map(p => {
        return (
          <tr>
            <td>{p.productName}</td>
            <td>{p.productCode}</td>
            <td>{p.productdescription}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ProdList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProdList;
import React, { Component } from 'react';
import { Alert, Button } from "react-bootstrap";
import * as productActions from "../redux/productActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ProdList from './ProductList';
class ProductForm extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

state = {
      product: {
        productID:"",
        productName: "",
        productCode: "",
        productdescription: "",

      }
    }

  onChange = (e) => {
    const value =  e.target.value;
    const product = { ...this.state.product,   [e.target.name]: value };
    this.setState({ product});

  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.actions.addProduct(this.state.product);

  
  }



  render() {
    return (
    <form onSubmit={this.submitForm}>
      <div className="App">
       <div class="row">
          <div class="col-md-12">&nbsp;</div>
        </div>
        <div class="row">
          <div class="col-md-12">&nbsp;</div>
        </div>

        <label class="cus-form-label">Product Form</label>
        <div class="row">
          <div class="col-md-12">&nbsp;</div>
        </div>
        <div class="row required-field">
          <div class="col-md-4">
            <label class="cus-form-label">Product ID</label>
            <input class="form-control minimal" id="productID" name="productID"
              type={this.state.product.productID} value={this.state.product.productID} onChange={this.onChange} />
          </div>
        </div>
        <div class="row required-field">
          <div class="col-md-4">
            <label class="cus-form-label">Product Name</label>
            <input class="form-control minimal" id="productName" name="productName"
              type={this.state.product.productName} value={this.state.product.productName} onChange={this.onChange} />
          </div>
        </div>
        <div class="row required-field">
          <div class="col-md-4">
            <label class="cus-form-label">Product Code</label>
            <input class="form-control minimal" id="productCode" name="productCode"
              type={this.state.product.productCode} value={this.state.product.productCode} onChange={this.onChange} />
          </div>
        </div>
        <div class="row required-field">
          <div class="col-md-4">
            <label class="cus-form-label">Product Description</label>
            <input class="form-control minimal" id="productdescription" name="productdescription"
              type={this.state.product.productdescription} value={this.state.product.productdescription} onChange={this.onChange} />
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-md-12">&nbsp;</div>
          </div>
          <Button type="submit">Submit</Button>       </div>
         
      </div>
      <div class="row">
          <div class="col-md-12">&nbsp;</div>
        </div>

        <label class="cus-form-label">Product List</label>
        <div class="row">
          <div class="col-md-12">&nbsp;</div>
        </div>
        <ProdList products ={this.props.products} />
       </form>

       
    );
  }
}


ProductForm.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log(state);
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
import React from "react";
import './Home.scss'
import ProductList from "../Product/ProductList";


export default class Home extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className="header">
                    <h1>Products </h1>
                    <hr />
                    <ProductList />
                </div>
            </div>
        );
    }
}
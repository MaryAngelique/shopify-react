import React, { Component } from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
    domain: "your-shop-name.myshopify.com",
    storefrontAccessToken: "your-storefront-access-token"
});

export class ShopProvider extends Component {
    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        isMenuOpen: false
    };

    createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout_id", checkout.id)
        this.setState({ checkout: checkout });
    };

    fetchCheckout = async () => {

    };

    addItemToCheckout = async () => {
        
    };

    removeLineItem = async () => {
    
    }

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        this.setState({ products: products });
    };

    fetchProductWithHandle = async (handle) => {
        
    };

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ShopProvider;
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

    componentDidMount() {
        if (localStorage.checkout_id) {
            this.fetchCheckout(localStorage.checkout_id)
        } else {
            this.createCheckout()
        }
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout_id", checkout.id)
        this.setState({ checkout: checkout });
    };

    fetchCheckout = async (checkoutId) => {
        client.checkout
        .fetch(checkoutId)
        .then((checkout) => {
            this.setState({ checkout: checkout });
        })
        .catch((error) => console.log(error));
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
        const product = await client.product.fetchByHandle(handle);
        this.setState({ product: product });
    };

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ShopProvider;
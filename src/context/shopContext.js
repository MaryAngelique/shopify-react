import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

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

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [
            {
                variantId,
                quantity: parseInt(quantity, 10),
            },
            ];

            const checkout = await client.checkout.addLineItems(
                this.state.checkout.id,
                lineItemsToAdd
            );
            this.setState({ checkout: checkout });

            this.openCart();
    };

    removeLineItem = async (lineItemIdsToRemove) => {
        const checkoutId = this.state.checkout.id

        client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove)
        .then(checkout => this.setState({ checkout }))
    }

    fetchAllProducts = async (product) => {
        const products = await client.product.fetchAll();
        this.setState({ products: products });

        return product;
    };

    fetchProductWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle);
        this.setState({ product: product });
    };

    closeCart = () => {
        this.setState({ isCartOpen: false });
    };

    openCart = () => {
        this.setState({ isCartOpen: true });
    };

    closeMenu = () => {

    }

    openMenu = () => {

    }


    render() {
        return (
            <ShopContext.Provider
                value = {{
                    ...this.state,
                    fetchAllProducts: this.fetchAllProducts,
                    fetchProductWithHandle: this.fetchProductWithHandle,
                    addItemToCheckout: this.addItemToCheckout,
                    closeCart: this.closeCart,
                    openCart: this.openCart,
                    closeMenu: this.closeMenu,
                    openMenu: this.openMenu
            }}>
                { this.props.children }
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
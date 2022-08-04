import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { ShopContext } from "../context/shopContext";

const ProductPage = () => {
    const { handle } = useParams();

    const { fetchProductWithHandle, addItemToCheckout, product } = useContext();

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    if (!product.title) return <div>loading...</div>

    return (
        <div>
            
        </div>
    )
}

export default ProductPage
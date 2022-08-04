import Reac, { useEffect, useContext } from "react";

import { ShopContext } from "../context/shopContext";

const Home = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {

        }
    }, [fetchAllProducts])


    if (!products) return <div>loading...</div>

    return (
        <div>
            {
                products.map(product => (
                    <a key={ product.title }>
                        { product.title }
                    </a>
                ))
            }
        </div>
    )
}

export default Home
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

        </div>
    )
}

export default Home
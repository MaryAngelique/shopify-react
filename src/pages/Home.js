import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import {
    Box,
    Grid,
    Text,
    Image
} from "@chakra-ui/react"

import ImageWithText from "../components/ImageWithText";

const Home = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {

        }
    }, [fetchAllProducts])


    if (!products) return <div>loading...</div>

    return (
        <Box>
            <Grid templateColumns={["repeat(1fr)", "repeat(3, 1fr)"]}>
                {products.map(product => (
                    <Link to={`/products/${product.handle}`} key={product.id} >
                        <Box _hover={{ opacity: "80%" }} textAlign="center" position="relative">
                        <Image
                            src={product.images[0].src}
                        />
                        <Text fontWeight="bold" position="absolute" bottom="15%" w="100%">{product.title}</Text>
                        <Text color="gray.500" position="absolute" bottom="5%" w="100%">${product.variants[0].price}</Text>
                        </Box>
                    </Link>
                ))}
            </Grid>
            <ImageWithText 
                button
                image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
                heading="Heading" 
                text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. " 
            />
        </Box>
    )
}

export default Home
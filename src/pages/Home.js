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
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla felis risus, non rutrum odio hendrerit in. Nunc congue egestas nibh a efficitur. Aenean viverra lorem nec metus sollicitudin pulvinar. Sed feugiat facilisis mauris, vitae gravida velit convallis in. Suspendisse scelerisque purus in nisi tristique, sed consequat tortor blandit. Vivamus a laoreet lectus, ut vehicula orci. Pellentesque id leo odio. Nam blandit et ante nec faucibus."
            />

            <ImageWithText 
                reverse
                button
                image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
                heading="Second Heading" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla felis risus, non rutrum odio hendrerit in. Nunc congue egestas nibh a efficitur. Aenean viverra lorem nec metus sollicitudin pulvinar. Sed feugiat facilisis mauris, vitae gravida velit convallis in. Suspendisse scelerisque purus in nisi tristique, sed consequat tortor blandit. Vivamus a laoreet lectus, ut vehicula orci. Pellentesque id leo odio. Nam blandit et ante nec faucibus." 
            />
            
        </Box>
    )
}

export default Home
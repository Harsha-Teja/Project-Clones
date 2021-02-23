import React from "react"
import { ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton, ProductWrapper, ProductHeading, ProductContainers} from "./ProductsElements"

function Products ({heading, data}) {
    return (
        <ProductContainers>
            <ProductHeading> {heading} </ProductHeading>
            <ProductWrapper>
                {data.map ((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle >
                                    {product.name}
                                </ProductTitle>
                                <ProductDesc>
                                    {product.desc}
                                </ProductDesc>
                                <ProductPrice>
                                    {product.price}
                                </ProductPrice>
                                <ProductButton>
                                    {product.button}
                                </ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductContainers>
    )
}

export default Products
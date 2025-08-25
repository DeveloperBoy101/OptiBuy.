import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  console.log(products);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collections"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, ea
          voluptatem quas officiis, illo dicta pariatur nulla rupti
          reprehenderit s ab excepturi cum?{" "}
        </p>
      </div>
      {/* Rndring products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {latestProducts.map((item, idx) => (
          <ProductItem
            key={idx}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productsId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetcProductData = async () => {
    products.map((item) => {
      if (item._id == productsId) {
        setProductData(item);
        setImage(item.image[0]);
      }
      return null;
    });
  };

  useEffect(() => {
    fetcProductData();
  }, [products, productsId]);

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex flex-col sm:flex-row gap-12">
        {/* Left Side - Images */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto">
            {productData.image.map((item, idx) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={idx}
                alt=""
                className={`w-20   cursor-pointer ${
                  image === item ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[90%]">
            <img src={image} alt="" className="w-[90%] sm:h-[80%] " />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="flex-1 flex flex-col">
          <h1 className="font-semibold text-3xl">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-4 " />
            <img src={assets.star_icon} alt="" className="w-4 " />
            <img src={assets.star_icon} alt="" className="w-4 " />
            <img src={assets.star_icon} alt="" className="w-4 " />
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <p className="pl-2 text-gray-600 text-sm">(122 Reviews)</p>
          </div>

          <p className="mt-3 text-3xl font-bold">
            {currency}
            {productData.price}
          </p>

          <p className="mt-4 text-gray-700 leading-snug text-sm">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-3">
            <p className="font-semibold ">Select Size</p>
            <div className="flex gap-3">
              {productData.sizes.map((item, idx) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-5 bg-gray-100 ${
                    item === size ? "border-orange-500 " : ""
                  }`}
                  key={idx}
                >
                  {item}
                </button>
              ))}
            </div>
            <div>
              <button onClick={() => addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                Add To Cart
              </button>
            </div>
            <hr className="mt-5 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-3 flex flex-col gap-1">
              <p>100% Original Product</p>
              <p>Cash On deleivery is available on ths product</p>
              <p>Easy Return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
      </div>
      {/** descrription fr rebiew */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <b className="border px-5 py-3 text-sm ">Reviews (122)</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 mb-20">
          <p>
            OptiBuy is a modern ecommerce clothing brand that offers trendy,
            high-quality, and affordable fashion for men, women, and kids. Our
            collection includes stylish tops, dresses, jeans, and seasonal wear
            designed for comfort and durability. We focus on delivering the
            latest fashion trends while ensuring premium fabrics and perfect
            fitting. With easy returns, fast delivery, and cash-on-delivery
            options, OptiBuy makes shopping simple and reliable. Our mission is
            to provide fashion that boosts confidence and fits every lifestyle.
            At OptiBuy, style meets affordability without compromise.
          </p>
          <p>
            Discover the latest fashion with OptiBuy’s exclusive clothing
            collection. From everyday essentials to stylish statement pieces,
            we’ve got you covered. Our designs blend comfort, quality, and
            modern trends effortlessly. Shop online today and upgrade your
            wardrobe with confidence.
          </p>
        </div>
      </div>
      {/* Display Relaetd Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;

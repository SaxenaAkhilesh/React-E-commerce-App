import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../utils/httpserver";
import { useCart } from "../context/CartContext";
import Button from "../components/style/button";

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface ProductProps {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
  creationAt: string;
  updatedAt: string;
}

const Product = () => {
  const [product, setProduct] = useState<ProductProps>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();


  const getProductDetails = async () => {
    try {
      const res = await getData(`/products/${id}`);
      if (res.status === 200) {
        setProduct(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) getProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!product) {
    return <div className="text-white p-10">Loading...</div>;
  }

  const isAlreadyInCart = (id: number) => {
    return cart.some((item: any) => item.id === id);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-8">
      <Button
        title="← Back"
        variant="outline"
        onClick={() => navigate(-1)}
        className="mb-6 text-gray-400"
        size="md"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <div className="bg-[#1a1a1a] p-5 rounded-2xl shadow-lg">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full h-[450px] object-contain rounded-xl"
          />
        </div>

        <div className="space-y-5">

          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-green-400 text-2xl font-semibold">
            ${product.price}
          </p>

          <div className="text-sm text-gray-400">
            Category:{" "}
            <span className="text-white font-medium">
              {product.category?.name}
            </span>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              title={isAlreadyInCart(product.id) ? "Already in Cart" : "Add to Cart"}
              variant={isAlreadyInCart(product.id) ? "outline" : "success"}
              size="md"
              disabled={isAlreadyInCart(product.id)}
              onClick={() => addToCart(product)}
            />

            <Button
              title="Buy Now"
              variant="outline"
              size="md"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
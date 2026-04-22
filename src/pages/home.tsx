import { useEffect, useState } from 'react'
import { getData } from '../utils/httpserver'
import Button from '../components/style/button';
import { useCart } from "../context/CartContext";
import Navbar from '../components/home/Navbar';
import { debouncing } from '../utils/resulableFunction';
import { useNavigate } from 'react-router-dom';

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface Product {
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

const Home = () => {
  const { addToCart, cart } = useCart();
  const [productData, setProductData] = useState<Product[]>([]);
  const [filterProduct, setFilterProduct] = useState<Product[]>([])
  const [searchItem, setSearchItem] = useState<string>("")
  const navigate = useNavigate()

  const getProductData = async () => {
    try {
      const response = await getData("/products?offset=0&limit=50");

      if (response.status === 200) {
        setProductData(response?.data || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get product details api 
  useEffect(() => {
    getProductData();
  }, []);

  const callingFunction = () => {
    const filtered = productData?.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.description.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.price.toString().includes(searchItem.toLowerCase())
      )
    }
    );

    setFilterProduct(filtered);
  }

  useEffect(() => {
    if (searchItem.trim() === "") {
      setFilterProduct(productData);
    } else {
      const searchProduct = debouncing(callingFunction, 800)
      searchProduct()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchItem, productData]);


  const isAlreadyInCart = (id: number) => {
    return cart.some((item: Product) => item.id === id);
  };


  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] text-white px-6 py-6">
      <Navbar searchItem={searchItem} setSearchItem={setSearchItem} />

      {filterProduct.length === 0 ? (
        <div className="flex justify-center items-center h-[100vh] text-gray-400 text-3xl">
          No products found for "
          <span className="text-white ml-1">{searchItem}</span>"
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[4rem]">

          {filterProduct.map((elem) => {


            return (
              <div
                key={elem.id}
                className="bg-[#1a1a1a] p-3 rounded-xl hover:scale-105 transition-all duration-300"
              >

                <img
                  src={elem.images?.[0] || elem.images?.[1] || elem.images?.[2] || ""}
                  alt={elem.title}
                  className="w-full h-[280px] object-cover rounded-lg"
                />

                <div className="mt-3">
                  <p className="text-green-400 font-semibold text-lg">
                    ${elem.price}
                  </p>

                  <h2 className="text-white font-medium text-sm mt-1 leading-tight">
                    {elem.title}
                  </h2>

                  <div className="mt-3 flex gap-5">
                    <Button
                      title={isAlreadyInCart(elem.id) ? "Already in Cart" : "Add to Cart"}
                      variant={isAlreadyInCart(elem.id) ? "outline" : "success"}
                      size="md"
                      className="w-full"
                      disabled={isAlreadyInCart(elem.id)}
                      onClick={() => addToCart(elem)}
                    />

                    <Button
                      title="View details"
                      variant="outline"
                      size="md"
                      className="w-full"
                      onClick={() => navigate(`/product/${elem.id}`)}
                    />
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
};

export default Home;
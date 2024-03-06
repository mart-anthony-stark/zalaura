import Cards from "../components/Cards";
import { products } from "../lib/data";

const Products = () => {
  return (
    <>
      <Cards items={products}/>
    </>
  );
};

export default Products;

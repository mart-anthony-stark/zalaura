'use client'

import Image from "next/image";
import { products } from "../../lib/data";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

type Params = { params: { slug: string } };

const SingleProduct = ({ params }: Params) => {
  const product = products.find((product) => product.slug === params.slug);
  const router = useRouter()

  if (!product) {
    return redirect('/products');
  }

  return (
    <div>
      <a onClick={()=> router.back()}>Back</a>
      <h1>
        {product.brand} - {product.name}
      </h1>
      <Image src={product.image} alt={product.name} height={400} width={300} />
    </div>
  );
};

export default SingleProduct;

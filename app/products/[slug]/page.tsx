"use client";

import { products } from "../../lib/data";
import { redirect, useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import Image from "next/image";
import { applyDiscount, pesoFormatter, toNumber } from "@/app/lib/priceHelper";

type Params = { params: { slug: string } };

const SingleProduct = ({ params }: Params) => {
  const product = products.find((product) => product.slug === params.slug);
  const router = useRouter();

  if (!product) {
    return redirect("/products");
  }

  return (
    <div className="p-4 md:p-12">
      <Button
        className="bg-black text-white p-2 rounded-md m-2"
        onClick={() => router.back()}
      >
        Back
      </Button>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <Image
          src={product.image}
          alt={product.name}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto sm:w-1/3 md:h-[400px]"
        />
        <div className="flex flex-col md:order-1">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl">{product.brand}</h3>
            <span className="bg-violet-600 px-1 text-white text-xs rounded-sm">
              VIP
            </span>
          </div>
          <p>{product.description}</p>

          <div className="p-2">
            <div className="flex justify-between">
              <p className="text-red-700 rounded-xl w-fit px-2 border border-red-700">
                {pesoFormatter.format(
                  applyDiscount(product.price, product.discount!)
                )}
              </p>
              <p className="text-gray-600 line-through">
                {pesoFormatter.format(toNumber(product.price))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

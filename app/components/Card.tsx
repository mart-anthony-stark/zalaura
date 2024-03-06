"use client";

import Image from "next/image";
import { Product } from "../lib/data";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { applyDiscount, pesoFormatter, toNumber } from "../lib/priceHelper";

type CardProps = Product;

const Card = ({
  name,
  image,
  brand,
  description,
  price,
  rate,
  slug,
  discount,
  onClick,
}: CardProps) => {
  const [count, setcount] = useState(0);

  const handleCartItem = (operator: "add" | "minus" = "add") => {
    if (operator === "add") setcount(count + 1);
    else if (operator === "minus" && count !== 0) setcount(count - 1);
  };

  return (
    <div>
      <Link href={`/products/${slug}`}>
        <div
          onClick={onClick}
          className="w-[300px] bg-white rounded-md relative"
        >
          <p className="absolute z-10 left-1 top-1 flex items-center gap-2 bg-gray-100 rounded-sm px-1 text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block !h-4 !w-4"
            >
              <path
                d="M5.131 4.86L.389 5.87l-.08.024a.481.481 0 00-.183.773l3.232 3.554-.488 4.745-.001.083a.494.494 0 00.69.41L8 13.534l4.44 1.923.08.027a.49.49 0 00.61-.52l-.49-4.744 3.234-3.554.051-.067a.483.483 0 00-.314-.73l-4.743-1.01L8.426.74a.498.498 0 00-.852 0L5.13 4.86z"
                fill="#FBC622"
              ></path>
            </svg>
            {rate}
          </p>

          <div className="overflow-hidden">
            <img
              className="rounded-md mx-auto w-[200px] h-[300px] hover:scale-125 ease-in-out duration-500"
              src={image}
              alt={name}
            />
          </div>

          <div className="bg-black text-white p-1 flex flex-col items-center rounded-b-md">
            <p className="text-[.85rem] font-bold">
              {discount ? discount * 100 : 0}% off
            </p>
            <p className="text-[.7rem]">Min spend Php 5,000.00.</p>
          </div>

          <div className="p-2">
            <div className="flex gap-2 items-center">
              <h3 className="text-xl font-bold">{brand} </h3>
              <span className="bg-violet-600 px-1 text-white text-xs rounded-sm">
                VIP
              </span>
            </div>
            <p>{name}</p>
            <p>{description}</p>
            <div className="flex justify-between">
              <p className="text-red-700 rounded-xl w-fit px-2 border border-red-700">
                {pesoFormatter.format(applyDiscount(price, discount!))}
              </p>
              <p className="text-gray-600 line-through">
                {pesoFormatter.format(toNumber(price))}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="m-2 flex justify-center">
        {count === 0 ? (
          <Button className="rounded-md" onClick={() => handleCartItem("add")}>Add to Cart</Button>
        ) : (
          <div className="flex items-center gap-4">
            <Button
              onClick={() => handleCartItem("minus")}
              className="rounded-sm select-none"
            >
              -
            </Button>
            <h3 className="text-xl select-none">{count}</h3>
            <Button
              onClick={() => handleCartItem("add")}
              className="rounded-sm select-none"
            >
              +
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

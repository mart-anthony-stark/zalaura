"use client";

import React from "react";
import Card from "./Card";
import { Product } from "../lib/data";

type CardsProps = {
  items: Product[];
};

const Cards = ({ items }: CardsProps) => {
  return (
    <div className="h-screen flex flex-wrap gap-2 justify-center items-center p-2">
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          brand={item.brand}
          description={item.description}
          image={item.image}
          price={item.price}
          rate={item.rate}
          slug={item.slug}
          discount={item.discount}
        />
      ))}
    </div>
  );
};

export default Cards;

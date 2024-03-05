import Image from "next/image";

type CardProps = {
  slug: string;
  name: string;
  brand: string;
  description: string;
  image: string;
  price: string;
  rate: string | number;
  onClick: () => void;
};

const Card = ({
  name,
  image,
  brand,
  description,
  price,
  rate,
  slug,
  onClick
}: CardProps) => {
  return (
    <div onClick={onClick} className="bg-white rounded-md relative">
      <p className="absolute left-1 top-1 bg-gray-300 rounded-sm px-1 text-sm">
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

      <Image
        className="rounded-md"
        src={image}
        height={400}
        width={300}
        alt={name}
      />

      <div className="bg-black text-white p-2 flex flex-col items-center rounded-b-md">
        <p className="text-sm font-bold">30% off</p>
      </div>

      <div className="flex gap-2 items-center">
        <h3 className="text-md font-bold">{brand} </h3>
        <span className="bg-violet-600 text-white text-xs rounded-sm">VIP</span>
      </div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default Card;

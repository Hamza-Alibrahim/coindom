/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  price_change_percentage_24h: number;
  image: string;
  current_price: number;
}

const CoinCard = (c: Props) => {
  return (
    <Link
      href={`/coin/${c.id}`}
      className="w-[20rem] max-sm:w-[50%] max-sm:mb-[2rem]"
    >
      <div className="flex flex-col items-center">
        <img
          src={c.image}
          alt={c.name + "Image"}
          className="w-[9rem] h-[9rem] mb-[1rem]"
        />
        <h3 className="text-[2rem] font-semibold">
          {c.name}{" "}
          <span
            className={
              c.price_change_percentage_24h > 0
                ? "text-[#0fcb81]"
                : "text-[#ff0006]"
            }
          >
            {c.price_change_percentage_24h.toFixed(2)}%
          </span>
        </h3>
        <h2 className="text-[2.2rem] font-semibold">
          ${" "}
          {c.current_price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h2>
      </div>
    </Link>
  );
};
export default CoinCard;

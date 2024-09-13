/* eslint-disable @next/next/no-img-element */
interface Props {
  id: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

const CoinListItem = (coin: Props) => {
  return (
    <a
      href={`coin/${coin.id}`}
      className="flex justify-between hover:bg-[#200840] cursor-pointer py-[2.5rem] px-[1.5rem] border-b-[1px] border-[#f3f2f4]"
    >
      <div className="flex gap-[2rem] w-[17.5%] text-end">
        <img className="w-[5rem] h-[5rem]" src={coin.image} alt={coin.image} />
        <span className="text-[2.2rem] font-medium whitespace-nowrap">
          {coin.name}
        </span>
      </div>
      <p className="text-[2.2rem] font-medium w-[27.5%] text-end">
        $ {coin.current_price}
      </p>
      <p
        className={`text-[2.2rem] font-medium w-[27.5%] text-end ${
          coin.price_change_percentage_24h > 0
            ? "text-[#0fcb81]"
            : "text-[#ff0006]"
        }
            `}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p className="text-[2.2rem] font-medium w-[27.5%] text-end">
        $ {coin.market_cap}
      </p>
    </a>
  );
};
export default CoinListItem;

import Image from "next/image";
import bitcoin from "../imgs/bitcoin.e146d46fb598ae0d8f43.png";
import ethereum from "../imgs/ethereum.c6cffe78f0c6abc85da9.png";
import axios from "axios";
import CoinCard from "./CoinCard";
import Link from "next/link";

export interface Coin {
  id: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

const Hero = async () => {
  const url = "https://api.coingecko.com/api/v3/coins/markets";

  const params = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 10,
    page: 1,
    sparkline: false,
  };

  const { data } = await axios.get<Coin[]>(url, {
    headers: {
      Authorization: `Bearer ${process.env.COINGECKO_API_KEY}`,
    },
    params: params,
  });

  return (
    <main className="relative min-h-screen pt-[20rem] bg-gradiant" id="Home">
      <div className="css-container hero">
        <div className="relative text-center uppercase">
          <Image
            className="absolute -left-[5rem] top-[3rem] w-[7rem] animate-bounce-slow max-lg:left-[2rem] max-md:hidden"
            src={bitcoin}
            alt="bitcoin"
          />
          <h1 className="text-[10.5rem] font-bold leading-[116px] max-lg:text-[9rem] max-lg:leading-[9.9rem] max-md:text-[7.5rem] max-md:leading-[8.3rem] max-sm:text-[6rem] max-sm:leading-[7.4rem] max-ms:text-[5.3rem] max-ms:leading-[5.7rem] transition-font-size duration-300 max-xms:text-[5rem]">
            Track and Trade <br />
            <span className="bg-clip-text text-transparent bg-text-gradiant">
              Crypto currencies
            </span>
          </h1>
          <Image
            className="absolute -right-[5rem] top-[3rem] w-[7rem] animate-bounce-slow max-lg:right-[2rem] max-md:hidden"
            src={ethereum}
            alt="ethereum"
          />
        </div>
        <div className="flex justify-around mt-[5rem] max-sm:flex-wrap max-ms:hidden">
          {data.length ? (
            data.slice(0, 4).map((c) => {
              return <CoinCard key={c.id} {...c} />;
            })
          ) : (
            <span className="loader block"></span>
          )}
        </div>
        <Link
          href="#Market"
          className="text-[2rem] font-semibold bg-text-gradiant py-[2rem] px-[4rem] rounded-[10rem] mt-[2rem] mx-auto flex items-center gap-[3rem] w-fit ms:hidden"
        >
          See Prices{" "}
          <svg
            className="mr-[.3rem]"
            height="1.5rem"
            width="1.5rem"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 185.343 185.343"
            xmlSpace="preserve"
            fill="#f3f2f4"
            transform="rotate(90)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </Link>
      </div>
    </main>
  );
};
export default Hero;

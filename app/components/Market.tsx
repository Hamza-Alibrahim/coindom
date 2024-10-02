"use client";
import axios from "axios";
import { Coin } from "./Hero";
import CoinListItem from "./CoinListItem";
import { useEffect, useState } from "react";
import Link from "next/link";

const List = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    setLoading(true);
    const url = "https://api.coingecko.com/api/v3/coins/markets";

    const params = {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 10,
      page: page,
      sparkline: false,
    };

    const fetchCoins = async () => {
      const { data } = await axios.get<Coin[]>(url, {
        headers: {
          Authorization: `Bearer ${process.env.COINGECKO_API_KEY}`,
        },
        params: params,
      });

      setCoins(data);
      setLoading(false);
    };

    fetchCoins();
  }, [page]);

  return (
    <section className="bg-section py-[5rem]" id="Market">
      <div className="css-container">
        <div className="w-full overflow-auto">
          <h1 className="text-[4.5rem] max-xms:text-[3.5rem] transition-font-size font-bold mb-[3rem]">
            Market Update
          </h1>
          <div className="flex flex-col min-w-[90rem] overflow-auto">
            <div className="bg-text-gradiant flex justify-between gap-[2rem] rounded-tl-[.8rem] rounded-tr-[.8rem] p-[1.5rem]">
              <p className="text-[2.2rem] font-medium w-[17.5%]">Coin</p>
              <p className="text-[2.2rem] font-medium w-[27.5%] text-end">
                Price
              </p>
              <p className="text-[2.2rem] font-medium w-[27.5%] text-end">
                24h Change
              </p>
              <p className="text-[2.2rem] font-medium w-[27.5%] text-end">
                Market Cap
              </p>
            </div>
            {isLoading ? (
              <span className="loader block"></span>
            ) : (
              coins.map((coin) => {
                return <CoinListItem key={coin.id} {...coin} />;
              })
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[2rem] mt-[5rem]">
        <Link
          href="#Market"
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
          className="w-[5rem] h-[5rem] rounded-full text-[2rem] bg-[#f3f2f4] text-black hover:bg-[#8c3cc9] hover:text-[#f3f2f4] transition-[background] duration-300 flex items-center justify-center"
        >
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
            fill="#000000"
            transform="rotate(180)"
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
        <button className="w-[5rem] h-[5rem] rounded-full text-[2rem] bg-[#f3f2f4] text-black hover:bg-[#8c3cc9] hover:text-[#f3f2f4] transition-[background] duration-300 font-medium">
          {page}
        </button>
        <Link
          href="#Market"
          onClick={() => setPage(page + 1)}
          className="w-[5rem] h-[5rem] rounded-full text-[2rem] bg-[#f3f2f4] text-black hover:bg-[#8c3cc9] hover:text-[#f3f2f4] transition-[background] duration-300 flex items-center justify-center"
        >
          <svg
            className="ml-[.3rem]"
            height="1.5rem"
            width="1.5rem"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 185.343 185.343"
            xmlSpace="preserve"
            fill="#000000"
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
    </section>
  );
};
export default List;

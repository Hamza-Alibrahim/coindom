/* eslint-disable @next/next/no-img-element */
import Navbar from "@/app/components/Navbar";
import axios from "axios";

interface Props {
  params: { coinId: string };
}

interface CoinDetails {
  symbol: string;
  name: string;
  description: { en: string };
  image: { large: string };
  market_cap_rank: number;
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
  };
}

const CoinPage = async ({ params: { coinId } }: Props) => {
  const { data: coin } = await axios.get<CoinDetails>(
    `https://api.coingecko.com/api/v3/coins/${coinId}`
  );

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-gradiant max-ms:pt-[12rem]">
        <div className="css-container">
          {coin === null ? (
            <span className="loader block"></span>
          ) : (
            <div className="flex max-sm:flex-col items-center">
              <div className="w-[30%] max-sm:w-[80%] flex flex-col items-center gap-[2rem] border-r-2 max-sm:border-b-2 max-sm:pb-[3rem] max-sm:border-r-0 border-white">
                <img
                  className="w-[22rem] h-[22rem]"
                  src={coin.image.large}
                  alt="Coin Image"
                />
                <h1 className="text-[3.3rem] font-bold">{coin.name}</h1>
                <h2 className="text-[2rem] font-medium">
                  Rank: #{coin.market_cap_rank}
                </h2>
              </div>
              <div className="flex flex-col gap-[4rem] w-[70%] max-sm:w-[80%] p-[3rem]">
                <div className="flex flex-wrap gap-[2rem] justify-between">
                  <h1 className="text-[2rem] font-normal">
                    24h Change:{" "}
                    <span
                      className={
                        coin.market_data.price_change_percentage_24h > 0
                          ? "text-[#0fcb81]"
                          : "text-[#ff0006]"
                      }
                    >
                      {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </h1>
                  <h1 className="text-[2rem] font-normal">
                    Price:{" "}
                    <span className="text-[#0fcb81]">
                      $
                      {coin.market_data.current_price.usd.toLocaleString(
                        "en-US",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </span>
                  </h1>
                  <h1 className="text-[2rem] font-normal">
                    Symbol: {coin.symbol}
                  </h1>
                </div>
                <div className="h-[30rem] overflow-auto">
                  <div
                    className="text-[2rem] font-normal description"
                    dangerouslySetInnerHTML={{ __html: coin.description.en }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
export default CoinPage;

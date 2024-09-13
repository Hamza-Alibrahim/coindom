import Image from "next/image";
import bitcoin from "../imgs/bitcoin.e146d46fb598ae0d8f43.png";
import ethereum from "../imgs/ethereum.c6cffe78f0c6abc85da9.png";
import Link from "next/link";

const Join = () => {
  return (
    <section
      className="bg-section py-[10rem] max-xs:py-[5rem] max-xs:px-0 transition-[padding]"
      id="Join"
    >
      <div className="css-container flex justify-center">
        <div className="relative text-center w-fit">
          <Image
            className="absolute -left-[14rem] top-[6rem] w-[7rem] animate-bounce-slow max-sm:hidden"
            src={bitcoin}
            alt="bitcoin"
          />
          <h1 className="text-[10rem] font-bold leading-[116px] mb-[2rem] uppercase max-ms:text-[7rem] max-ms:leading-[7.7rem] transition-font-size duration-300 max-xms:text-[5rem] max-xms:leading-[5.7rem]">
            join us via <br />
            <span className="bg-clip-text text-transparent bg-text-gradiant">
              discord
            </span>
          </h1>
          <p className="text-[2.2rem] font-normal mb-[10rem] max-xs:px-[5rem]">
            Invest and manage all your crypto at one place.
          </p>
          <Link
            href="https://discord.com/"
            target="_blank"
            className="text-[2rem] font-semibold bg-text-gradiant py-[2rem] px-[4rem] rounded-[10rem]"
          >
            Join via Discord
          </Link>
          <Image
            className="absolute -right-[14rem] top-[6rem] w-[7rem] animate-bounce-slow max-sm:hidden"
            src={ethereum}
            alt="ethereum"
          />
        </div>
      </div>
    </section>
  );
};
export default Join;

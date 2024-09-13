import Image from "next/image";
import reasons from "../data/reasons";
import ReasonCard from "./ReasonCard";
import choose from "../imgs/choose-main.39852b7511b28d44406f.png";

const ChooseUs = () => {
  return (
    <section
      className="choose-us p-[10rem] bg-section max-xs:py-[5rem] max-xs:px-0 transition-[padding]"
      id="Choose Us"
    >
      <div className="css-container">
        <h1 className="text-[7rem] font-bold mb-[10rem] text-center max-xms:text-[5rem] max-xms:leading-[5.7rem] transition-font-size">
          why{" "}
          <span className="bg-clip-text text-transparent bg-text-gradiant">
            choose us
          </span>
        </h1>
        <div className="flex items-center gap-[2rem] max-lg:flex-col w-full">
          <div className="flex flex-col gap-[3rem] w-full">
            {reasons.slice(0, 3).map((reason) => {
              return <ReasonCard key={reason.title} {...reason} />;
            })}
          </div>
          <div className="flex justify-center w-full">
            <Image
              className="w-[85%] max-lg:w-[30%] max-xs:w-[45%]"
              src={choose}
              alt="Choose us"
            />
          </div>
          <div className="flex flex-col gap-[3rem] w-full">
            {reasons.slice(3).map((reason) => {
              return <ReasonCard key={reason.title} {...reason} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseUs;

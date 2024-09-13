interface Props {
  svg: string;
  title: string;
  description: string;
}

const ReasonCard = (reason: Props) => {
  return (
    <div className="bg-[#1b1229] p-[2.4rem] rounded-[2.4rem] flex gap-[4rem] border-[1px] border-solid border-[hsla(0,0%,51%,.25)] w-full">
      <span
        className="flex items-center justify-center p-[1.5rem] h-[6rem] w-[8rem] bg-text-gradiant rounded-[1.6rem]"
        dangerouslySetInnerHTML={{ __html: reason.svg }}
      ></span>
      <div>
        <h2 className="text-[2.5rem] font-bold max-ms:text-[2rem] transition-font-size">
          {reason.title}
        </h2>
        <p className="mt-[1rem] text-[1.8rem] text-[#e7e6e8] font-normal max-ms:text-[1.6rem] transition-font-size">
          {reason.description}
        </p>
      </div>
    </div>
  );
};
export default ReasonCard;

import React from "react";

export default function PlanSingleSmall({
  wrapper,
  plan,
  titleStyle,
  price,
  priceStyle,
  data,
  benefitStyle,
  ribbon,
}) {
  return (
    <div
      className={`${wrapper} relative overflow-hidden px-8 rounded-[0.938rem] w-full max-w-[16.438rem] mx-auto`}
    >
      {ribbon && (
        <div className="gradient w-full max-w-[17.875rem] py-[0.438rem] text-center whitespace-nowrap absolute -left-[86px] top-[26px] -rotate-[36deg]">
          <span className="text-white text-sm font-bold uppercase">
            popular choice
          </span>
        </div>
      )}
      <div className="text-center">
        <span
          className={`${titleStyle} text-base leading-[1.125rem] font-bold text-center capitalize`}
        >
          {plan}
        </span>
      </div>
      <div
        className={`${priceStyle} text-center mt-[0.875rem] font-medium pb-[0.438rem]`}
      >
        <span className="text-sm">$</span>
        <span className="text-[2.625rem] font-bold">{price}</span>
        <span className="text-xs">Per Month</span>
      </div>
      <div className="text-center">
        {data.map((item) => (
          <div key={item.id} className="flex gap-2 items-center pt-[0.438rem]">
            <img src={item.logo} width={6.75} height={6.75} alt="check" />
            <span className={`${benefitStyle} text-xs leading-[1.125rem] `}>
              {item.benefit}
            </span>
          </div>
        ))}
      </div>
      {/* <Button
        className={`${buttonStyle}  text-sm leading-5 md:text-base md:leading-7 py-[0.521rem] text-center w-full max-w-[15.125rem] rounded-lg mt-[1.875rem]`}
      >
        Upgrade
      </Button> */}
    </div>
  );
}

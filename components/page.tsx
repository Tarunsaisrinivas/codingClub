import PropTypes from "prop-types";

const Page = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[5px] box-border max-w-full shrink-0 text-left text-base text-protothon2021webflowio-tundora font-protothon2021webflowio-inter-regular-128 ${className}`}
    >
      <div className="w-[940px] flex flex-row items-start justify-between max-w-[940px] shrink-0 gap-[20px] mq1050:max-w-full">
        <div className="w-[100.5px] flex flex-row items-start justify-start max-w-[100.5px] shrink-0">
          <img
            className="h-[60px] flex-1 relative max-w-[100.48px] overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/5e936dd836c30bfcc8e52c99-simplifiedwordmarkeditp500png@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[20px] shrink-0 mq750:hidden">
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0 text-mini-9">
              <a className="[text-decoration:none] relative leading-[22px] text-[inherit] inline-block min-w-[91.2px] whitespace-nowrap">
                Sponsor Us
              </a>
            </div>
            <div className="w-[59.9px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border text-mini-8">
              <a className="[text-decoration:none] self-stretch relative leading-[22px] text-[inherit]">
                Mentor
              </a>
            </div>
            <div className="w-[40.4px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
              <a className="[text-decoration:none] self-stretch relative leading-[22px] text-[inherit]">
                FAQ
              </a>
            </div>
            <div className="shadow-[-3px_-2px_1px_rgba(0,_0,_0,_0.15)] bg-protothon2021webflowio-flamingo flex flex-row items-start justify-start py-[9px] px-[15px] text-protothon2021webflowio-nero font-protothon2021webflowio-nunito-sans-bold-16">
              <a className="[text-decoration:none] relative leading-[22px] font-bold text-[inherit] inline-block min-w-[124px]">
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;

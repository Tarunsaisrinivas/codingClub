import PropTypes from "prop-types";

const Container1 = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-row items-end justify-start py-0 pr-[33px] pl-0 box-border gap-[40px] max-w-[940px] shrink-0 text-left text-26xl text-protothon2021webflowio-charade font-protothon2021webflowio-inter-regular-128 mq750:gap-[20px] mq1050:flex-wrap mq1050:max-w-full ${className}`}
    >
      <div className="h-px w-px relative hidden" />
      <img
        className="h-[489.6px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[320px] z-[1]"
        loading="lazy"
        alt=""
        src="/6001efccedd3967fd7abef4f-valentines20logo20with20no20paddingpng@2x.png"
      />
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[105px] box-border min-w-[373px] min-h-[365px] max-w-full mq450:pb-[68px] mq450:box-border mq750:min-w-full mq1050:flex-1">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-col items-start justify-start gap-[9px]">
            <h1 className="m-0 relative text-inherit leading-[44px] font-inherit mq450:text-8xl mq450:leading-[26px] mq1050:text-17xl mq1050:leading-[35px]">
              <p className="m-0">
                <span className="font-protothon2021webflowio-inter-regular-128">{`The `}</span>
                <b>Online</b>
              </p>
              <p className="m-0">UX Hackathon</p>
            </h1>
            <div className="relative text-base-5 leading-[22px]">
              February 13, 2021 – February 14, 2021
            </div>
            <div className="h-[72px] relative text-mini-8 leading-[24px] flex items-center">
              <span>
                <p className="m-0">
                  Test your rapid prototyping and design thinking
                </p>
                <p className="m-0">
                  skills! Push the limits of your mind to make something
                </p>
                <p className="m-0">amazing.</p>
              </span>
            </div>
          </div>
          <div className="shadow-[-3px_-2px_1px_rgba(0,_0,_0,_0.15)] bg-protothon2021webflowio-flamingo flex flex-row items-start justify-start py-[9px] px-[15px] text-base text-protothon2021webflowio-nero font-protothon2021webflowio-nunito-sans-bold-16">
            <b className="relative leading-[22px] inline-block min-w-[78px]">
              REGISTER
            </b>
          </div>
        </div>
      </div>
      <div className="h-px w-px relative hidden" />
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;

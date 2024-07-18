import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-protothon2021webflowio-flamingo flex flex-row items-start justify-center pt-10 px-5 pb-5 box-border relative shrink-0 max-w-full text-left text-smi-7 text-protothon2021webflowio-nero font-protothon2021webflowio-inter-regular-128 ${className}`}
    >
      <div className="w-[940px] flex flex-col items-start justify-start gap-[40px] max-w-[940px] mq750:gap-[20px] mq1050:max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-between py-0 pr-1 pl-0 gap-[20px]">
          <div className="w-[284px] flex flex-row items-start justify-start max-w-[940px] max-h-[35px] mq1050:max-w-full">
            <img
              className="h-[35px] flex-1 relative max-w-[284.3px] overflow-hidden object-cover"
              alt=""
              src="/5e902526bc7fadc57f0d3d7c-simplifiedwordmarkp500png@2x.png"
            />
          </div>
          <div className="w-[99px] flex flex-col items-start justify-start pt-2.5 px-0 pb-[72px] box-border gap-[20px] text-smi-8">
            <div className="flex flex-col items-start justify-start">
              <b className="relative leading-[21px] inline-block min-w-[99px]">
                Stay connected
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-sm-1 text-protothon2021webflowio-vanilla-ice">
              <div className="self-stretch flex flex-col items-start justify-start">
                <a className="[text-decoration:none] self-stretch relative leading-[22px] text-[inherit]">
                  Facebook
                </a>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-smi-8">
                <div className="self-stretch relative leading-[22px]">
                  Instagram
                </div>
              </div>
            </div>
          </div>
          <div className="w-[109px] flex flex-col items-start justify-start pt-2.5 px-0 pb-10 box-border gap-[20px]">
            <b className="relative leading-[21px] inline-block min-w-[34px]">
              Links
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-smi text-protothon2021webflowio-vanilla-ice">
              <div className="self-stretch relative leading-[22px]">
                Register Now
              </div>
              <div className="relative leading-[22px] inline-block min-w-[109.2px]">
                Become a Mentor
              </div>
              <div className="relative leading-[22px] inline-block min-w-[72px]">
                Sponsor Us
              </div>
            </div>
          </div>
          <div className="h-[177px] w-[168px] flex flex-col items-start justify-start py-2.5 px-0 box-border gap-[20px] min-w-[168px]">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
              <b className="relative leading-[21px] inline-block min-w-[35px]">
                Team
              </b>
            </div>
            <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-2.5 pl-0 gap-[10px_8.7px]">
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/5e91e137241fd827ee722123-laurenp500jpeg@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/5e91e20e37cf8d47983d44f8-michellep500jpeg@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/5e9607377d05ac790f92f261-ranjith202p500jpeg@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/5e936e4b73fd9d57fd86259f-vishankp500jpeg@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/5e91e1374660cb21f8db0b1b-anastasiajpeg@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/6001e281652c1dab677a3980-judyp500jpeg@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/5e91e18537cf8d426b3d3bdf-zoshjpeg@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/6003f3b95fc12853da31c71d-ivanjpg@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/6003f3b949096a28c73ccdf3-shreyajpg@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/5e91e1365f86782bf25a0632-ashmann-synglejpeg@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/6001e2f377705c2e0cbe63a5-72474501-1177485192437445-3547657439060951040-op500jpeg@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start max-w-[168px]">
                <img
                  className="h-8 w-8 relative rounded-xl overflow-hidden shrink-0 object-cover max-w-[32px]"
                  alt=""
                  src="/6005df4c7dc6575970a782ed-shane20martinp500jpeg@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-center text-smi-8">
          <div className="w-[291.6px] relative leading-[22px] flex items-center justify-center shrink-0">
            Copyright © 2021 Dubstech. All rights reserved.
          </div>
        </div>
      </div>
      <div className="w-[136px] !m-[0] absolute right-[12px] bottom-[12px] shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded-10xs bg-protothon2021webflowio-nero overflow-hidden shrink-0 flex flex-row items-start justify-start pt-1.5 px-1.5 pb-[5.9px] box-border gap-[8px] z-[1]">
        <img
          className="h-[15.1px] w-4 relative object-contain min-h-[15px]"
          alt=""
          src="/webflowbadgeiconf67cd735e3svg@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
          <img
            className="self-stretch h-2.5 relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/webflowbadgetext6faa6a38cdsvg@2x.png"
          />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

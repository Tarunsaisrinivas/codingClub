import PropTypes from "prop-types";

const Container = ({
  className = "",
  container,
  michelleYu,
  srCommunications,
  designerBlackberry,
}) => {
  return (
    <div
      className={`self-stretch h-[210.3px] flex flex-col items-start justify-start pt-0 px-0 pb-[73.6px] box-border gap-[20px] text-left text-base-5 text-protothon2021webflowio-charade font-protothon2021webflowio-inter-regular-128 ${className}`}
    >
      <img
        className="w-[136.7px] h-[136.7px] relative overflow-hidden shrink-0 object-cover"
        alt=""
        src={container}
      />
      
      <div className="flex flex-col items-start justify-start shrink-0">
        <b className="relative leading-[20px] inline-block min-w-[94px]">
          {michelleYu}
        </b>
        <div className="relative text-smi-9 leading-[16.8px]">
          <p className="m-0">{srCommunications}</p>
          <p className="m-0">{designerBlackberry}</p>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  michelleYu: PropTypes.string,
  srCommunications: PropTypes.string,
  designerBlackberry: PropTypes.string,
};

export default Container;

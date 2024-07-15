import HowAdoptionWorks from "./HowAdoptionWorks";
import HowLostInquiry from "./HowLostInquiry";

const HowItWorks = () => {
  return (
    <div className="mt-20 max-w-screen-lg mx-auto p-10">
      <h1 className="text-4xl font-bold mb-14 text-center">How It Works</h1>
      <div className="grid grid-cols-1 gap-20 ">
        <HowAdoptionWorks></HowAdoptionWorks>
        <HowLostInquiry></HowLostInquiry>
      </div>
    </div>
  );
};

export default HowItWorks;

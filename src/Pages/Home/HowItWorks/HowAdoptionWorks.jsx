import petAdoptionImg from "../../../assets/Images/pet_adoption4S.png";
const HowAdoptionWorks = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="lg:flex md:flex justify-center items-center gap-10">
        <div className="">
          <img
            className="w-full  hover:scale-105 transition-all ease-in-out rounded-xl hover:rounded-xl"
            src={petAdoptionImg}
            alt=""
          />
        </div>
        <div className="lg:w-1/2 md:1/2  ">
          <h5 className="text-2xl font-semibold mt-10 mb-5 text-center  ">
            Adoption
          </h5>
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start timeline-box">Find Your Pet</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>

            <li>
              <hr className="py-10" />
              <div className="timeline-end timeline-box ">Know Your Pet</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10
                     18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <div className="timeline-start timeline-box">
                Take Your Pet Home
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowAdoptionWorks;

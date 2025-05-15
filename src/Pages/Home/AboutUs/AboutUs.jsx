import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="mt-10 w-3/4 mx-auto flex flex-col justify-center items-center gap-7">
      <div>
        <h1 className="text-center text-4xl font-bold mb-4">Pet Save</h1>
        <h4 className="text-center text-3xl font-semibold mb-5 ">
         Helping animals find loving homes and better lives. Can you be their hero?
        </h4>
        <p className="text-lg text-pretty">
          

At Pet Save, we believe every animal deserves compassion and care. Each day, we rescue abandoned and vulnerable pets, providing them with shelter, food, and medical attention until they find their forever homes. Our mission is to reduce animal suffering and ensure no pet is left behind. With your support, we offer rehabilitation, foster placement, and adoption services tailored to each pet’s unique needs. From playful puppies to senior cats, every animal receives love and respect. Together, we can end neglect and give these loyal companions the life they truly deserve.
        </p>
      </div>
      <div>
        <Link to="/about">
          <button className="btn btn-primary text-secondary mb-5">
            Find out more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;

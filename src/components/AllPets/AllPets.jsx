import { useLoaderData } from "react-router-dom";

const AllPets = () => {
  const { pets } = useLoaderData();
  console.log(pets);

  return (
    <div>
      <h1>{pets.length}</h1>
    </div>
  );
};

export default AllPets;

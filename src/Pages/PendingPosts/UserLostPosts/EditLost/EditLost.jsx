import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const EditLost = () => {
  const pet = useLoaderData();
  console.log(pet);

  const { petName } = pet;
  console.log(petName);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>this is edit lost: {petName}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={petName} {...register("firstName")} />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default EditLost;

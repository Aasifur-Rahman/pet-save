import { useForm } from "react-hook-form";
import NavBar from "../../Shared/NavBar";
import { useState } from "react";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const [isEditable, setIsEditable] = useState(false);
  const handleEdit = () => {
    setIsEditable(true);
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="avatar items-center  mt-10 ml-5">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>

            <div>
              <h5 className="ml-5">Name</h5>
              <h5 className="ml-5 mt-4">Email</h5>
            </div>
          </div>
          <div className="mt-6">
            <button onClick={handleEdit} className="btn btn-primary px-7 mr-5">
              Edit
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            disabled={!isEditable}
            placeholder="name"
            {...register("name")}
          />
          <input placeholder="nickName" {...register("name")} />
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input placeholder="country" {...register("country")} />
          <input value="Save" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Profile;

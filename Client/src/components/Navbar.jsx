import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center shadow-lg">
        <div className="text-3xl font-bold text-[262626] p-4">Pokemon List</div>
        <ul className="flex">
          <li className="mx-3 font-semibold hover:text-yellow-300 hover:cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-3 font-semibold hover:text-yellow-300 hover:cursor-pointer">
            News
          </li>
          <li className="mx-3 font-semibold hover:text-yellow-300 hover:cursor-pointer">
            Shop
          </li>
        </ul>
        <div className="flex">
          <button className="bg-green-400 mx-3 py-2 px-4 rounded-xl font-semibold text-white">
            Sign in
          </button>
          <button className="bg-orange-400 mx-3 py-2 px-4 rounded-xl font-semibold text-white">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

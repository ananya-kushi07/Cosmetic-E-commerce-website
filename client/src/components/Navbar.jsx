import { Link } from "react-router-dom";

function Navbar() {
  return (

    <div className="bg-pink-500 text-white p-4 flex justify-between">

      <h1 className="text-2xl font-bold">
        GlowMart
      </h1>

      <div className="flex gap-5">

        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/cart">Cart</Link>

        <Link to="/login">Login</Link>

      </div>

    </div>
  );
}

export default Navbar;
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {

  return (

    <div>

      <Navbar />

      <div className="h-[90vh] flex flex-col justify-center items-center bg-pink-100">

        <h1 className="text-6xl font-bold text-pink-600">
          GlowMart
        </h1>

        <p className="mt-5 text-xl">
          Your Beauty Shopping Destination
        </p>

        <Link to="/products">

          <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-lg">
            Shop Now
          </button>

        </Link>

      </div>

    </div>
  );
}

export default Home;
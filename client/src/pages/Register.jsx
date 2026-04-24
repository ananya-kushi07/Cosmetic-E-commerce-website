import Navbar from "../components/Navbar";

function Register() {

  return (

    <div>

      <Navbar />

      <div className="flex justify-center items-center h-[80vh]">

        <div className="bg-white shadow-lg p-10 rounded-xl w-100">

          <h1 className="text-3xl font-bold text-center mb-6">
            Register
          </h1>

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 mb-4 rounded"
          />

          <button className="bg-pink-500 text-white w-full py-3 rounded">
            Register
          </button>

        </div>

      </div>

    </div>
  );
}

export default Register;
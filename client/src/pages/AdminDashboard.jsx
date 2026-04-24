import Navbar from "../components/Navbar";

function AdminDashboard() {

  return (

    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-5">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-5">

          <div className="bg-pink-200 p-8 rounded-xl">
            <h1 className="text-2xl font-bold">
              Total Users
            </h1>

            <p className="text-3xl mt-4">
              120
            </p>
          </div>

          <div className="bg-pink-200 p-8 rounded-xl">
            <h1 className="text-2xl font-bold">
              Products
            </h1>

            <p className="text-3xl mt-4">
              75
            </p>
          </div>

          <div className="bg-pink-200 p-8 rounded-xl">
            <h1 className="text-2xl font-bold">
              Orders
            </h1>

            <p className="text-3xl mt-4">
              40
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;
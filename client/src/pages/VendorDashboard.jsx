import Navbar from "../components/Navbar";

function VendorDashboard() {

  return (

    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-6">
          Vendor Dashboard
        </h1>

        <div className="shadow-lg p-8 rounded-xl w-125">

          <input
            type="text"
            placeholder="Product Name"
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full border p-3 mb-4 rounded"
          />

          <button className="bg-pink-500 text-white px-5 py-3 rounded">
            Add Product
          </button>

        </div>

      </div>

    </div>
  );
}

export default VendorDashboard;
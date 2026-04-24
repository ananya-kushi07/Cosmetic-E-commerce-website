import Navbar from "../components/Navbar";

function Cart() {

  return (

    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-5">
          Shopping Cart
        </h1>

        <div className="shadow p-5 rounded-lg">

          <h2 className="text-xl">
            Lipstick
          </h2>

          <p>₹499</p>

        </div>

      </div>

    </div>
  );
}

export default Cart;
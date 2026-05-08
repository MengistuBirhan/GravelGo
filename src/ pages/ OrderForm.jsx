function OrderForm() {
  return (
    <div className="form-container">

      <h1>Order Product</h1>

      <form>

        <input type="text" placeholder="Full Name" />

        <input type="text" placeholder="Phone Number" />

        <input type="text" placeholder="Address" />

        <input type="number" placeholder="Quantity" />

        <button type="submit">
          Submit Order
        </button>

      </form>

    </div>
  );
}

export default OrderForm;
import CartClear from "./CartClear";
import CartLits from "./CartLits";
import CartTotal from "./CartTotal";
import CheckoutButton from "./CheckoutButton";

const ShoppingCart = () => {
  return (
    <div>
      <CartLits />
      <CartTotal />
      <CartClear />
      <CheckoutButton />
    </div>
  );
};

export default ShoppingCart;

import Link from "next/link";
import { HiShoppingBag } from "react-icons/hi";
import { NavStyles, NavItems } from "../styles/NavStyles.js";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

export default function Nav() {
  const { showCart, setShowCart } = useStateContext();

  return (
    <NavStyles>
      <Link href={"/"}>Ecommerce</Link>
      <NavItems>
        <div onClick={() => setShowCart(!showCart)}>
          <HiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyles>
  );
}

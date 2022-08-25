import Link from "next/link";
import { HiShoppingBag } from "react-icons/hi";
import { NavStyles, NavItems } from "../styles/NavStyles.js";

export default function Nav() {
  return (
    <NavStyles>
      <Link href={"/"}>Ecommerce</Link>
      <NavItems>
        <div>
          <HiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
    </NavStyles>
  );
}

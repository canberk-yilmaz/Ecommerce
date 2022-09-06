import Link from "next/link";
import { HiShoppingBag } from "react-icons/hi";
import { NavStyles, NavItems } from "../styles/NavStyles.js";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
const { motion, AnimatePresence } = require("framer-motion");

export default function Nav() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <NavStyles>
      <Link href={"/"}>Ecommerce</Link>
      <NavItems>
        <div onClick={() => setShowCart(!showCart)}>
          {totalQuantities > 0 && (
            <motion.span
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ delay: 0.2 }}
            >
              {totalQuantities}
            </motion.span>
          )}
          <HiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
}

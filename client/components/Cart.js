import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
} from "../styles/CartStyles";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export default function Cart() {
  const { cartItems } = useStateContext();
  return (
    <CartWrapper>
      <CartStyle>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>Cart is empty 😞</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>{item.price} $</h3>
                  <div>
                    <button>
                      <AiFillMinusCircle />
                    </button>
                    <span>Quantity</span>
                    <button>
                      <AiFillPlusCircle />
                    </button>
                  </div>
                </CardInfo>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
}
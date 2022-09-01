import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { useStateContext } from "../../lib/context";

export default function ProductDetails() {
  const { qty, increaseQty, decreaseQty, cartItems, addToCart } =
    useStateContext();
  const router = useRouter();
  const { slug } = router.query;
  // fetch GrapghQL data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: {
      slug: router.query.slug,
    },
  });

  const { data, error, fetching } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  //extract our data
  let { title, description, image } = data.products.data[0].attributes;

  console.log(data.products.data[0]);
  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button onClick={decreaseQty}>
            <AiFillMinusCircle />
          </button>
          <p>{qty}</p>
          <button onClick={increaseQty}>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy onClick={() => addToCart(data.products.data[0].attributes, qty)}>
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}

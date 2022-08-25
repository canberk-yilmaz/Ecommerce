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

export default function Test() {
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
          <button>
            <AiFillMinusCircle />
          </button>
          <p>0</p>
          <button>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy>Add to cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}

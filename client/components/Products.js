import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";

export default function Product({ product }) {
  const { title, price, image, slug } = product.attributes;

  return (
    <ProductStyle>
      <div>
        <Link href={`/product/${slug}`}>
          <img
            src={image.data.attributes.formats.small.url}
            alt={image.data.attributes.formats.thumbnail.name}
          />
        </Link>
      </div>
      <h2>{title}</h2>
      <h3>{price} $</h3>
    </ProductStyle>
  );
}

import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query.js";
import Product from "../components/Products.js";
import { Gallery } from "../styles/Gallery.js";

export default function Home() {
  // get product data from graphql query

  const [results] = useQuery({ query: PRODUCT_QUERY });

  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>E-commerce</title>
        <meta
          name="description"
          content="Ecommerce website for buying clothes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Gallery>
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallery>
      </main>
    </div>
  );
}

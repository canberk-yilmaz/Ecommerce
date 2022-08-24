import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  const { id } = router.query;
  console.log("pid", id);
  return (
    <div>
      <h1>Test Page {id}</h1>
      <p>This is the Test page</p>
    </div>
  );
}

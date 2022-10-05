import useSWR from "swr";
import Load from "../../components/Load";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function NewsArticle() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR("/api/news", fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <Load />;

  return (
    <div>
      <h1>{data}</h1>
      <br />
      <p> {id} </p>
    </div>
  );
}
export default NewsArticle;

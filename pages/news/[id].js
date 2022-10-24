//import useSWR from "swr";
//import Load from "../../components/Load";
import { useRouter } from "next/router";
import NewList from "../../components/NewsList";
import Back from "../../components/Back";
import { Grid } from "@nextui-org/react";

//const fetcher = (...args) => fetch(...args).then((res) => res.json());

function News({ data }) {
  const router = useRouter();
  const { id } = router.query;

  var pageArticle;
  for (let article in data) {
    if (data[article].iD === id) {
      pageArticle = data[article];
    }
  }

  if (!pageArticle) {
    return <NewList />;
  }
  //Back
  return (
    <div>
      <Grid.Container gap={2}>
        <Grid>
          <Back />
        </Grid>
        <Grid>
          <h1>{pageArticle.title}</h1>
        </Grid>
      </Grid.Container>

      <br />
      <p dangerouslySetInnerHTML={{ __html: pageArticle.description }}></p>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  //const router = useRouter();
  //const { id } = router.query;

  // Fetch data from external API
  //const res = await fetch(`https://.../data`)
  //const data = await res.json()
  const data = require("../../cache/news.json");

  // Pass data to the page via props
  return { props: { data } };
}

export default News;

/*

function NewsArticle() {
  const router = useRouter();
  const { id } = router.query;

  //const { data, error } = useSWR("/api/news", fetcher);
  const data = require("../../cache/news.json");
  //if (error) return <div>{error.message}</div>;
  if (!data) return <Load />;
  console.log(data[0].title);
  var pageArticle;
  for (var i = 0; i >= data.length; i++) {
    console.log(data[i].title);
    if (data[i].iD === id) {
      pageArticle = data[i];
    }
  }
  console.log(pageArticle);
  return (
    <div>
      <h1>{pageArticle[0].title}</h1>
      <br />
      <p> {id} </p>
    </div>
  );
}
//export default NewsArticle; */

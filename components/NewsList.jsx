import { Loading, Container, Card, Grid, Text} from "@nextui-org/react";
import Link from 'next/link'
import useSWR from "swr";
import Error from "../components/Error";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function News() {
  const { data, error } = useSWR("/api/school/hmbhs/news", fetcher);

  if (error) {
    return (
      <div>
        <Loading color="error" textColor="error">
          <Error message="Error" error={error} />
        </Loading>
      </div>
    );
  }
  if (!data) {
    return (
      <Container>
        <div>
          <Loading type="gradient" />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Grid.Container gap={1} wrap={"wrap"}>
        {data.map((article) => (
          <Grid xs={4} key={article.iD}>
              <Link href={`/news/${encodeURIComponent(article.iD)}`}>
            <Card
              isHoverable
              isPressable
              variant="flat"
              css={{ p: "$6", mw: "400px" }}
            >
              <Card.Header>
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      {article.title}
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    <Text css={{ color: "$accents8" }}>
                      {article.authorName}
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
                </Card>
            </Link>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
}
/*
<Card.Footer>
              {assignment.links && (
                  {assignment.links.map((link) => (
                     
                <Link
                  color="primary"
                  target="_blank"
                  href={link.URL}
                >
                  {link.description}
                </Link>
                  
                  ))}
              )}
            </Card.Footer>
            */



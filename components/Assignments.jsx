// posts will be populated at build time by getStaticProps()
import {
  Table,
  Loading,
  Container,
  Card,
  Grid,
  Text,
  Link,
} from "@nextui-org/react";
import useSWR from "swr";
import Error from "../components/Error";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Assignments() {
  const { data, error } = useSWR("/api/school/hmbhs/assignments", fetcher);

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
      <div>
        {data.map((assignment) => (
          <Card css={{ p: "$6", mw: "400px" }} key={assignment.iD}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    {assignment.title}
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    {assignment.courseName}
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            {assignment.description != "null" && (
              <Card.Body css={{ py: "$2" }}>
                <Text>{assignment.description} </Text>
              </Card.Body>
            )}

            <Card.Footer>
              {assignment.links && (
                  {assignment.links.map((link) => (
                      <Link
                  icon
                  color="primary"
                  target="_blank"
                  href={link.URL}
                >
                  Visit source code on GitHub.
                </Link>
                  ))}
                
              )}
            </Card.Footer>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Assignments;

import { Loading, Container, Card, Grid, Text, Link } from "@nextui-org/react";
import useSWR from "swr";
import Error from "../components/Error";
import Load from "../components/Load"

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
  if (!data) return <Load />

  return (
    <Container>
      <Grid.Container gap={1} wrap={"wrap"}>
        {data.map((assignment) => (
          <Grid xs={4} key={assignment.iD}>
            <Card isHoverable isPressable css={{ p: "$6", mw: "400px" }}>
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
              <Card.Body css={{ py: "$2" }}>
                <Text>
                  {new Date(
                    parseInt(toString(assignment.dueDate))
                  ).toLocaleDateString()}
                </Text>
              </Card.Body>
            </Card>
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

export default Assignments;

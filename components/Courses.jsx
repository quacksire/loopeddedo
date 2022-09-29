// posts will be populated at build time by getStaticProps()
import { Table, Loading, Container } from "@nextui-org/react";
import useSWR from "swr";
import Error from "../components/Error";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Courses() {
  const { data, error } = useSWR("/api/school/hmbhs/courses", fetcher);

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
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="single"
    >
      <Table.Header>
        <Table.Column>Course</Table.Column>
        <Table.Column>Grade</Table.Column>
        <Table.Column>Teacher</Table.Column>
      </Table.Header>
      <Table.Body>
        {data.map((course) => (
          <Table.Row key={course.periodID}>
            <Table.Cell>{course.courseName}</Table.Cell>
            <Table.Cell>
              {(course.grade = "null" ? course.grade : "")}
            </Table.Cell>
            <Table.Cell>{course.teacherName}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Courses;

// posts will be populated at build time by getStaticProps()
import { Table } from '@nextui-org/react';
function Courses({ courses }) {
    return (
        <Table aria-label="Example table with static content"
               css={{
                   height: "auto",
                   minWidth: "100%",

               }}
               selectionMode="single">
            <Table.Header>
                <Table.Column>Course</Table.Column>
                <Table.Column>Grade</Table.Column>
                <Table.Column>Teacher</Table.Column>
            </Table.Header>
            <Table.Body>
            {courses.map((course) => (
                <Table.Row key={course.periodID}>
                    <Table.Cell>{course.courseName}</Table.Cell>
                    <Table.Cell>{course.grade != "null" ? course.grade : ''}</Table.Cell>
                    <Table.Cell>{course.teacherName}</Table.Cell>
                </Table.Row>
            ))}
            </Table.Body>
        </Table>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`https://hmbhs.schoolloop.com/mapi/report_card?studentID=1593846838236`, { headers: { 'Authorization': `Basic c2plZmZzMjQ6MTIwMzIwMDU=` } })
    const courses = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            courses,
        },
    }
}

export default Courses

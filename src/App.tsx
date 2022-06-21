import React, { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client';
import { client } from './lib/apollo'

const GET_LEASSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lesson {
  id: string;
  title: string;
}
function App() {
  // useEffect(() => {
  //   client.query({ query: GET_LEASSONS_QUERY, }).then(response => console.log(response.data))
  // }, [])
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LEASSONS_QUERY);
  return (
    <ul>
      {data?.lessons.map((lesson: Lesson) => {
       return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App

import { gql, useQuery } from "@apollo/client";
import React from "react";
import Leasson from "./Leasson";

const GET_LESSONS_QUERY = gql`
query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED){
        id
        lessonType
        availableAt
        title
        slug
    }
}
`

interface GetLessonsQueryResponse {
    lessons: {
        availableAt: string;
        id: string;
        lessonType: 'live' | 'class';
        slug: string;
        title: string;
    }[]
}

const Sidebar = () => {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
    console.log(data);
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => (
                    <Leasson
                        key={lesson.id}
                        title={lesson.title}
                        availableAt={new Date(lesson.availableAt)}
                        slug={lesson.slug}
                        type={lesson.lessonType}
                    />
                ))}
            </div>
        </aside>
    );
}

export default Sidebar;
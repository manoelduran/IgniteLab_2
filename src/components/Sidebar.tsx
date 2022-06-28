import React from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import Leasson from "./Leasson";


const Sidebar = () => {
    const { data } = useGetLessonsQuery();
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
import React from 'react'
import Todo from './Todo'

const dummyTodo =[{
    id :1,
    title:"Title1",
    desc:"desc1"
},
{
    id:2,
    title:"Title2",
    desc:"desc2"
}
]

export default function HomePage() {
  return (
    <div>

        <Todo todos={dummyTodo}/>
    </div>

  )
}

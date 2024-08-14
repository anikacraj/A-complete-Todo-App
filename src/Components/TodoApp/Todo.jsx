import React from 'react'

export default function Todo(props) {
    console.log(props.todos);
  return (
    <div>Todo
<div>
 <section>
    {props.todos.map((todo)=>{
        <Todo todo={todo} key={todo.id}/>
    })}
 </section>
</div>

    </div>
  )
}

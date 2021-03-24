import React from 'react'
import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

function TaskTracker() {
    const [showAddTask,setShowAddTask]=useState(false)

  const [tasks, setTasks]= useState(
    [
      {
          id : 1,
          text : 'Doctors Appointment',
          day : 'Feb 5th at 2:30 pm',
          reminder: true,
      },
      {
          id: 2,
          text : 'Meeting at School',
          day : 'Feb 6th at 1:30 pm',
          reminder: true, 
      },
      {
          id : 3,
          text : 'Food Shoping',
          day : 'Feb 5th at 2:30 pm',
          reminder : false, 
      }
    ]
  )

  // AddTask
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }
  // DeleteTask
  const deleteTask=(id)=> {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  // ToggleReminder
  const toggleReminder=(id)=>{
    setTasks(
      tasks.map((task)=>
      task.id===id ? {...task,reminder:!task.reminder} : task
      )
      )
  }
    return (
        <div  className="container">
            <Header title='Amogh Agashe' onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} />  
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <h3>No tasks to show</h3> }
        </div>
    )
}

export default TaskTracker

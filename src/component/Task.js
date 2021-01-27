import React from 'react'

const Task= ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>{task.text} <span style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}>X</span></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task

import React, { useState } from 'react'
import { connect } from 'react-redux'

import './styles.css'

 function toggleTask(task){
    return {
      type: 'ADD_TASK',
      task
    }
  }

const Form = ({dispatch}) => {

  const [task, setTask] = useState('')
    
  function inputChange(e){
    setTask(e.target.value)
  }

  return(
      <form onSubmit={(e) => {
          e.preventDefault();
          if(task === ""){
            return
          }
          dispatch(toggleTask(task))
          setTask('')
        }}>
        <label>Your Task</label>
        <input onChange={inputChange} value={task} type="text" />
        <button type="submit">Send</button>
      </form>
    )
}

export default connect()(Form)
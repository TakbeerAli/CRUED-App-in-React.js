import React,{useState} from 'react'
import Button from './Button'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [ day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submitform = (e) =>{
        e.preventDefault()

        if(!text){
            alert('form is empty add text to it')
            return
        }
         
        // add value to this then this will go to main app & save to array
        onAdd({ text, day, reminder })

        //clear the form after submitting
        setText('')
        setDay('')
        setReminder(false)
    };

    return (
        <form className='add-form' onSubmit={submitform}>
           <div className='form-control'>
              <label>Task</label>
              <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)} />
           </div>

           <div className='form-control'>
              <label>Day & Time</label>
              <input type="text" placeholder="Add Day & Time" value={day} onChange={(e)=>setDay(e.target.value)}  />
           </div>

           <div className='form-control form-control-check'>
              <label>Set Reminderk</label>
              <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
           </div>

           <div className='form-control '>
           <Button  type='submit' value='save task'  color='green' text='Submit'/>
           </div>
          
        </form>
    )
}

export default AddTask

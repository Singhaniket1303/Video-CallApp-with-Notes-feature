import React from 'react'

const Notes = () => {
    
  return (
    <div className='ml-10 text-white'>
    Notes
    <div>
        <form  className= '' action="">
            <input type="text" 
                placeholder='Title'
            />
            <br />
            <br />
            <textarea 
            cols="22" 
            rows="10"
             placeholder='Notes. . . . '
                required
             />
             <br />
             <button className= " border-2  p-2 px-4 hover:bg-[#6ca278] text-white text-xl ml-12 mb-5 font-serif">Save</button>
        </form>
    </div>
    </div>
  )
}

export default Notes
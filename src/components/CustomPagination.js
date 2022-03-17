import React from 'react'


const CustomPagination = ({ setPage,page }) => {

    const btnArray = Array.from({length:12},(x,i)=>i+1)

  const handlePageChange = (page) => {
    setPage(page)
    window.scroll(0, 0)
  }


 
  return (
    <div className='btn-container'>
      {btnArray.map((btn,index)=>{
          return <button key={btn} onClick={()=>handlePageChange(btn)} className={`page-btn ${btn === page? 'active' : null}`}>{btn}</button>
      })}
    </div>
  )
}

export default CustomPagination
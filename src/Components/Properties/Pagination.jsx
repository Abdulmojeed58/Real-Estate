import React from "react";
import classes from './Pagination.module.css'

const Pagination = ({totalPost, postPerPage, paginate, next, handleChange, currentId, prev }) => {
    const pageNumber = []

    

    for(let i = 1; i <= Math.ceil(totalPost/postPerPage); i++) {
        pageNumber.push(i)
    }

    const totalPages = pageNumber.map(page=>(
        <p 
            key={page}
            onClick={()=>{
                paginate(page)
                handleChange(page)
            }
            }
            className={currentId === page ? `${classes.active}` : `''`}
        >
            {page}
        </p>
    ))

    return (
        <div className={classes.pagination}>
            <p className={currentId <= 1 ? `${classes.inActive}` : ''} onClick={prev}>First</p>

            {totalPages}

            <p className={currentId === Math.ceil(totalPost/postPerPage) ? `${classes.inActive} ${classes.name}` : classes.next} onClick={next}>Next</p>
        </div>
    )

}

export default Pagination
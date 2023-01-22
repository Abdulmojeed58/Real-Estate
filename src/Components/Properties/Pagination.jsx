import React from "react";
import classes from './Pagination.module.css'

const Pagination = ({totalPost, postPerPage, paginate}) => {
    const pageNumber = []

    for(let i = 1; i <= Math.ceil(totalPost/postPerPage); i++) {
        pageNumber.push(i)
    }

    const totalPages = pageNumber.map(page=>(
        <p 
            key={page}
            onClick={()=>paginate(page)}
        >
            {page}
        </p>
    ))

    return (
        <div className={classes.pagination}>
            <p>First</p>
            {totalPages}
            <p className={classes.next}>Next</p>
        </div>
    )

}

export default Pagination
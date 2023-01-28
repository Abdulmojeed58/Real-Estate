import React, { useEffect, useState } from "react";
import axios from "axios";
import Property from "./Property";
import classes from './PropertyLists.module.css'
import Pagination from "./Pagination";



const PropertyLists = () => {
    const [currentId, setCurrentId] = useState(1)
    const [estates, setEstates] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(6)

    

    useEffect(()=>{
        const fetchMap = async () => {
            try{
                const res = await axios.request({
                    method: 'GET',
                    url: 'https://bayut.p.rapidapi.com/properties/list',
                    params: {
                      locationExternalIDs: '5002,6020',
                      purpose: 'for-rent',
                      hitsPerPage: '25',
                      page: '0',
                      lang: 'en',
                      sort: 'city-level-score',
                      rentFrequency: 'monthly',
                      categoryExternalID: '4'
                    },
                    headers: {
                      'X-RapidAPI-Key': 'e039675d13mshcbc9a408bc6e19ep162dffjsn218f67500e79',
                      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
                    }
                  })
                setEstates(res.data.hits)
            } catch(error) {
                console.error(error)
            }
        }
        fetchMap()
    }, [])

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirst = indexOfLastPost - postPerPage
    const currentPost = estates.slice(indexOfFirst, indexOfLastPost)
    
    const paginate = (number) => setCurrentPage(number)

    const handleChange = (id) => {
        setCurrentId(id)
    }

    const next = () => {
        if(currentPage < estates.length/postPerPage) {
            setCurrentPage(prevPage => {
                    return prevPage + 1
                })
                setCurrentId(prevId=> {
                    return prevId + 1
                })
            }

            console.log(currentId)

    }

    const prev = () => {
        if(currentPage > 1) {
            setCurrentPage(prevPage => {
                    return prevPage - 1
                })
                setCurrentId(prevId=> {
                    return prevId - 1
                })
            }

    }

    const properties = currentPost.map((estate)=>{

        return (
            <Property 
                key={estate.id}
                contactName={estate.contactName}
                price={estate.price}
                coverphoto={estate.coverPhoto?.url}
            />
        )
    })


    return (
        <div className={classes.propertyLists}>
            <div className={classes.flex}>
                <h1 className={classes.title}>List Of Properties</h1>
                <button className={classes.btn}>View All Property</button>
            </div>
            <div className={classes.line}></div>
            <div className={classes.properties}>
                {properties}
            </div>
            <Pagination postPerPage={postPerPage} totalPost={estates.length} paginate={paginate} next={next} prev={prev} handleChange={handleChange} currentId={currentId} />
        </div>
    )
}

export default PropertyLists
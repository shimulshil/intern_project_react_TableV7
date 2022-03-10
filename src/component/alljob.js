import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../TableContainer";
import "./alljob.css";

  const Alljob=()=> {
  //   const [posts, setPosts]=useState([])

  //   const getPosts = async () => {
  //       const userPosts = await axios.get("https://jsonplaceholder.typicode.com/users")
  //       setPosts(userPosts.data);  // set State
  //       console.log(userPosts.data.length);
  //   };


  //   useEffect(()=>{
  //     getPosts()
  //     const interval=setInterval(()=>{
  //       getPosts()
  //     },10000)
  //     return()=>clearInterval(interval)     
  //   },[])
  //   console.log(posts);

  const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPosts = async () => {
      setIsLoading(true)
      const res = await axios.get("http://abiesrvgcs02/qs2.webapi/api/getalljobs")
      const contacts = res.data
      // console.log(alljobs);
      setIsLoading(false)
      setPosts(contacts) 
    };

    useEffect(()=>{
      getPosts()
      const interval=setInterval(()=>{
        getPosts()
        },10000)
      return()=>clearInterval(interval)     
      },[])
    console.log(posts);
    // console.log(posts.length);
    // var datalength= posts.length;
    // console.log(datalength);

  
    const columns = [
      {  
          Header: 'Job ID', 
          accessor: 'JobId',
      },
      {  
          Header: 'Operator',  
          accessor: 'Operator' ,
        },
      {  
          Header: 'Creation Date & Time',  
          accessor: 'CreationTime' ,
      },
      {  
          Header: 'Priority',  
        accessor: 'Priority',
      },
      {  
          Header: 'Running Task',  
          accessor: 'TasksRunning',
        },
        {  
          Header: 'Ended Task',  
          accessor: 'TasksEnded',
        },
        
        {  
          Header: 'Number of Error',  
          accessor: 'TasksEndedWithError',
        },
        {  
          Header: 'Waiting Tasks',  
          accessor: 'TasksWaiting'
        },
        // {  
        //   Header: 'Job Type',  
        //   accessor: 'JobType' ,
        // },
          
        // {  
        //   Header: 'Job Name',  
        //   accessor: 'JobName' ,
        // },
    ];

    return (
      <div style={{ height: 700, width: '100%' }}> 
        {isLoading && <p>Loading Data.....</p>}  
        {isLoading}  
        <Table columns={columns}
        data={posts} />
      </div>
    );
    // return (
    //     <Table columns={columns}
    //     data={posts} />
    // );
  }

export default Alljob;


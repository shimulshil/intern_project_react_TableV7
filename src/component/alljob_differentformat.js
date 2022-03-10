import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../TableContainer";
// import { SelectColumnFilter } from "../Filter";
import "./alljob.css";

// function Alljob() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios("http://abiesrvgcs02/qs2.webapi/api/getalljobs")

//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   console.log(data);
  // ---------------------------
  const Alljob=()=> {
    const [posts, setPosts]=useState([])
  const getPosts = async () => {
    try {
  const userPosts = await axios.get("http://abiesrvgcs02/qs2.webapi/api/getalljobs")
      
      setPosts(userPosts.data);  // set State
    
    } catch (err) {
      console.error(err.message);
    }
  };
    
  useEffect(()=>{
    
    getPosts()
    const interval=setInterval(()=>{
      getPosts()
     },10000)
       
       
     return()=>clearInterval(interval)
},[])

   // ---------------------------

  
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
      <Table columns={columns}
       data={posts} />
  );
}

export default Alljob;


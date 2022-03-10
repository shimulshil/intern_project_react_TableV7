import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./TableContainer";
import { SelectColumnFilter } from "./Filter";
import pic from "./image/Logo.png";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://abiesrvgcs02/qs2.webapi/api/getalljobs")

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);
  // this.setData({coordinates: data, loading: false });
  //      },3000)
  console.log(data);

  const columns = [{  
    Header: 'Job ID',  
    accessor: 'JobId',
   }
   ,{  
    Header: 'Operator',  
    accessor: 'Operator' ,
    }
   
   ,{  
   Header: 'Creation Date & Time',  
   accessor: 'CreationTime' ,
   }
   ,{  
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
      }
      ,{  
        Header: 'Job Type',  
        accessor: 'JobType' ,
        }
       
      //  ,{  
      //  Header: 'Job Name',  
      //  accessor: 'JobName' ,
      //  }
      //  ,{  
      //  Header: 'Number of Error',  
      //  accessor: 'TasksEndedWithError',
      //  },
      //  {  
      //   Header: 'Waiting Tasks',  
      //   accessor: 'TasksWaiting'
        
      //   }
];

  return (
    <div className="App">
     <span><img src={pic} /></span>
      <h2 style={{textAlign: "center",fontSize: "30px"}}>Hexagon Distribution System</h2>
      <span className="title" style={{textAlign: "left",fontSize: "20px",fontWeight:"bolder"}}> All Jobs information</span> <br />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;


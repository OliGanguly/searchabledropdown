import React, { useState } from 'react';

function Search({placeholder,data}) {
    const [filteredData,setFilteredData]=useState([])
    const [wardEntered,setWardEntered]=useState("")
    const handleChange = (e) =>{
        setWardEntered(e.target.value)
        
        const newFilter=data.filter((value)=>{
        console.log("value.",value.title.toLowerCase().includes(e.target.value.toLowerCase()))
        return value.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        if(e.target.value===""){
            setFilteredData("")
        }else{
            setFilteredData(newFilter)
        }
        
    }
    return (
        <div>
            <div>
                <input type="text"
                value={wardEntered}
                placeholder={placeholder}
                onChange={handleChange}
                />
                {
                    filteredData.length>0 &&
                    (<div>
                       {filteredData.slice(0,15).map((value,key)=>{
                          return (
                            <a className="dataItem" href={value.link} target="_blank">
                              <p>{value.title} </p>
                            </a>
                          );
                       })}
                    </div>)

                }
            </div>
        </div>
    );
}

export default Search;
import React from 'react';
import Searchable from './Searchable';
import BookData from "./Data.json";
import Search from './Search';
function App(props) {
  return (
    <div>
      {/* <Searchable data={BookData}/> */}
      <Search placeholder="Enter Name" data={BookData}/>
    </div>
  );
}

export default App;
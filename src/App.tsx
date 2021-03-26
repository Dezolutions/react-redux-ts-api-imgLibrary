import React from 'react';

import Images from './components/Images';
import Search from './components/Search';

const App :React.FC = () =>{
  return (
    
      <div className="app">
          <Search/>
          <Images/>
      </div>
    
  );
}

export default App;

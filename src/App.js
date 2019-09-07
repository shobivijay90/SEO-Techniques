import React from 'react';

import pointsData from "./pointsData";
import Techniques from "./Techniques";
import "./styles/index.css";


class App extends React.Component {
  render() {
     
    const DataComponents = pointsData.map(points => <Techniques key={points.id} item={points.item}/>);
    
  return (
     <div class="container">
     <div class="techniques">
     <h2>SEO TECHNIQUES 2019</h2>
        {DataComponents}
    </div>
     </div>
  )
  }
}

export default App;

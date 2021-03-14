import React from 'react';
import './App.css';
import playlist from './images/plus.png';
import {getMockJson } from './mock/index';

function App() {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    getMockJson().then(res => res).then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <div className="row">
        {
          data.map((value, i) => (
            <div className="col-md-3" key={i}>
              <div className="card p-3 mb-5 bg-white rounded on-hover">
                <div className="container">
                  <img className="card-img-top" src={value.path} alt="Card cap" />
                  {value.showMore &&
                    <div className="content">
                      <h2>{value.count}</h2>
                      <p className="small">Workouts</p>
                      <img className="playlist" src={playlist} alt="nothing to show" />
                    </div>
                  }
                </div>
                <div className="card-body row">
                  <div className="col-md-12">
                    <h5 className="card-title pullLeft">{value.name}
                    </h5>
                    <img className="thumbnails" src={value.thumb} alt="Thumbnail" />
                  </div>
                  <div className="col-md-12 customHeight">
                    <a href="!#" className="pullLeft hide">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;

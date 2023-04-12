import React from 'react';
import Slide_bar from './components/Slider_bar/index.jsx';
import ViewProfile from './components/ViewProfile/ViewProfile.jsx';

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <Slide_bar>
        <ViewProfile></ViewProfile>
      </Slide_bar>
    </div>
  );

}

export default App;

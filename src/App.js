
import { Component } from 'react';

import { Boxes } from './Components/boxes/boxes';

import './App.css';
import { Box } from './Components/box/box';
import { Search } from './Components/search/search';
import { Logo } from './Components/logo/logo';
import { Navbar } from './Components/navbar/navbar';

class App extends Component {
  constructor() {
    super();

    
    this.state = {
      boxes: [],
      searchTitle:[]

    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(boxBody => this.setState({ boxes: boxBody }))
  }
  

  render() {

    const { boxes, searchTitle} = this.state;
    const filterTitle = boxes.filter(Box => 
      Box.title.includes(searchTitle)
    );
    return(
      <div className="App">
      <Navbar/>
      <Logo/>
        <Boxes boxes={filterTitle}/>
      </div>

    )
  }
}
export default App;

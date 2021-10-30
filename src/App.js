import { Component } from 'react';
import { Boxes } from './Components/boxes/boxes';
import './App.css';
import {Box} from './Components/box/box';
import {Search} from './Components/search/search';
import {Logo} from './Components/logo/logo';
import {NavBar} from './Components/navbar/navbar';
import {Sideright} from './Components/sideright/sideright';
import {Sidebar} from "./Components/sidebar/sidebar"
import { Scroll } from "./Components/scroll/scroll";

class App extends Component {
    constructor() {
        super();
    this.state = {boxes: [],
            searchTitle: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(boxBody => this.setState({
                boxes: boxBody
            }))
    }
render() {
        const {boxes,searchTitle} = this.state;
        const filterTitle = boxes.filter(Box =>Box.title.includes(searchTitle));
        return(
          <div className = "App">
            <div className="header">
                <NavBar/>
                <Search placeholder = 'Search...'
                handleChange = {e => this.setState({searchTitle: e.target.value})
                    }/>
            </div>
            <div className = "container" >
                <Sidebar />
                    <Boxes boxes = {filterTitle}/>
                <Sideright/>
            </div> 
          </div>
        )
    }
}
export default App;
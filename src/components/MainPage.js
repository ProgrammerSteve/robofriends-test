import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/header';

import './MainPage.css';



class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }



  filteredRobots = ()=>{
    return this.props.robots.filter(robot=>{
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    })



  } 
  

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;

    return (
      <div className='tc mainDiv'>
        {/* <h1 className='f1'>RoboFriends</h1> */}
        <Header/>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;

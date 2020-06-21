import React, {Component} from 'react';
import './App.css';
import dogWov from './assets/audio/dog.mp3';

import Item from './Item';

export default class App extends Component {
  state = {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    index: 0,
    counter: 0,
    play: false
  }
  
  url = "http://streaming.tdiradio.com:8000/house.mp3";
  music = new Audio(this.url);
  
  playMusicHandler = () => {
    this.setState({ play: true})
    this.music.play();
  }
  
  pauseMusicHandler = () => {
    this.setState({ play: false})
    this.music.pause();
  }
  
  onClickHandler = () => {
    let playDogWov = new Audio(dogWov);
    playDogWov.play();
    return this.setState({
      counter: this.state.counter + 1
    })
  }
  
  componentDidMount() {
    setInterval(() => {
      return this.setState({
        index: Math.floor(Math.random() * 9),
      })
    }, 1000)
  }
  
  render() {
    let items = this.state.items.map((item, index) => <Item
      key={item}
      itemIndex={index}
      stateIndex={this.state.index}
      onClickHandler={this.onClickHandler}
    />)
    
    return (
      <div className='App'>
        <div className='wrapper'>
          {items}
        </div>
        <div className="counter">
          {this.state.counter}
        </div>
        {
          this.state.play
          ? <button onClick={this.pauseMusicHandler}>Stop the Music!</button>
          : <button onClick={this.playMusicHandler}>Music is my language!</button>
        }
      </div>
    );
  }
}
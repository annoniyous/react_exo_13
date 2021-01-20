
import './App.css';
import Article from './components/Article';

import React, { Component } from 'react'

export class App extends Component {
  state = {

    article:[
      {
      id :1,
      titre : "Semaine 1",
      texte :"Coding 15",
      auteur :"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
      id :2,
      titre : "Semaine 2",
      texte :"Coding 15",
      auteur :"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
      id :3,
      titre : "Semaine 3",
      texte :"Coding 15",
      auteur :"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
      id :4,
      titre : "Semaine 4",
      texte :"Coding 15",
      auteur :"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    }
    ]
  }
  render() {
    return (
      <div>
        <Article  info ={this.state.article}/>
      </div>
    )
  }
}

export default App

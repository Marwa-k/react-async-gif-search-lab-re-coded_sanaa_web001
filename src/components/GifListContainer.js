import React from 'react';
import GifSearch from './GifSearch'

export default class GifListContainer extends React.Component{

  state = {
    giphs: [],
    url: ''
  }

  changeUrl = (inputVal) => {
    this.setState({
      url: `${inputVal}`
    },()=>this.componentDidMount())
  }

  componentDidMount(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.url}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        giphs:json.data
      })
    })
  }

  render(){
    return(
      <div>
        <GifSearch func={this.changeUrl} giphs={this.state.giphs}/>
      </div>
    )
  }
}

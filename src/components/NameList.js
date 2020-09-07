import React, { Component } from 'react'
import axios from 'axios'

export default class NameList extends Component {

  state = {
    names: []
  }

  async componentDidMount() {
    this.getNames()
  }

  getNames = async () => {
    const res = await axios.get('https://api.nytimes.com/svc/books/v3/lists/names?api-key=SSD9FfRP9CMHdbUt2fTmYDrnMQx7Mjqf')
    this.setState({
      names: res.data.results
    })
  }

  render() {
    return (
      <div>
        {
          this.state.names.map(name => (
            <div key={name.list_name}>
              <div>
                <div>
                  <p>{name.list_name}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

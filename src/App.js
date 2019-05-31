import React, { Component } from 'react'
import Sectionone from '../src/sectionone/Sectionone'
import Boxmodel from '../src/Boxmodel/Boxmodel'
import Sectionfirst from '../src/sectionfirst/Sectionfirst'
export default class App extends Component {
  render() {
    return (
      <div>
        <Sectionfirst/>
        <Boxmodel/>
        <Sectionone/>
      </div>
    )
  }
}

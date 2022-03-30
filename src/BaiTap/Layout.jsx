import React, { Component } from 'react'
import Body from './BaiTapBody/Body'
import Footer from './Footer'
import Header from './Header'

export default class Layout extends Component {
  render() {
    return (
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-12'>
                  <Header/>
              </div>

              <div className='col-12'>
                  <Body/>
              </div>

              <div className='col-12'>
                  <Footer/>
              </div>
          </div>
      </div>
      
    )
  }
}

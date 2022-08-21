import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='text-center py-5 p-lg-5 bg-light rounded-lg text-center'>
        <div className='py-5'>
        <h1 className='display-4 font-weight-bold'>A warm welcome!</h1>
        <p className='pBanner'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
        <button className='btn btn-primary'>Call to action</button>
        </div>
        
      
        </div>
    )
  }
}

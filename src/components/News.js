import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        this is news components
        <div className="row">
             <div className="col-md-4">
                <NewsItem title="mytitle" description="my desc"/>
             </div>

             <div className="col-md-4">
                <NewsItem title="mytitle" description="my desc"/>
             </div>

             <div className="col-md-4">
                <NewsItem title="mytitle" description="my desc"/>
             </div>
             
        </div>
      </div>
    )
  }
}

export default News

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()



    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.fetchReviews()
  }

  fetchReviews() {
    let reviews = [...this.state.reviews]
    fetch('//api.nytimes.com/svc/movies/v2/reviews/all/json?api-key=MMj69ol8Y0b9VVFuAbjFyvDhbtp6Y10o')
    .then(res => res.json())
    .then(data => {
      let results = data.results
      results.forEach((review) => {
        reviews.push(review)
      })
      this.setState({reviews})
    })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

// This is how I would do it. Map movies in the reviews then pass one at a time down.
{/* <div className="latest-movie-reviews">
  <h1>Latest Movie Reviews</h1>
  {this.state.reviews.map((review) => {
    return <MovieReviews reviews={review} key={review.display_title}/>
  })}
</div> */}

export default LatestMovieReviewsContainer

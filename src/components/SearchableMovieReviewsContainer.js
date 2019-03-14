import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetchReviews() {
    let reviews = []
    let search = this.state.searchTerm
    fetch(`//api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search.split(' ').join('+')}&api-key=MMj69ol8Y0b9VVFuAbjFyvDhbtp6Y10o`)
    .then(res => res.json())
    .then(data => {
      let results = data.results
      results.forEach((review) => {
        reviews.push(review)
      })
      this.setState({
        reviews,
        searchTerm: ''
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchReviews()
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Searchable Movie Reviews</h1>
        <form  onSubmit={this.handleSubmit}>
          <label>Search for a movie:</label>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

// see Latest movies review for how I would factor this given the choice.

export default SearchableMovieReviewsContainer

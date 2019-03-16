import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'jPUo72jO88bp44NQgY891X8lXuQTGDN1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {searchTerm: "", reviews: []}
  }

  handleSearchInput = (event) => this.setState({searchTerm: event.target.value})

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm).concat(`&api-key=${NYT_API_KEY}`))
      .then(res => res.json())
      .then(res => this.setState({reviews: res.results}));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input id="search-input" type="text" style={{width: 300}} onChange={this.handleSearchInput}/>
          <button type="submit">Submit</button>
        </form>
        {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        < MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer

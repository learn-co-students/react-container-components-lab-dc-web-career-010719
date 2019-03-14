import React from 'react'

export const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map((review) => {
        let image_url
        if (!review.multimedia) {
          image_url = "https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png"
        } else {
          image_url = review.multimedia.src
        }

        return (
          <div className="review" style={{float: 'left',width: '50%'}}>
            <h2>{review.display_title}</h2>
            <img src={image_url} alt="movie poster" />
            <p>{review.summary_short}</p>
          </div>
        )
      })}
    </div>
  )
}

// This is how I would do it. Map movies in the reviews then pass one at a time down.
// let {display_title, summary_short} = props.reviews
// let image_url
// if (!props.reviews.multimedia) {
//   image_url = "https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png"
// } else {
//   image_url = props.reviews.multimedia.src
// }
//
// return (
//   <div className="review-list">
//     <div className="review" style={{float: 'left',width: '50%'}}>
//       <h2>{display_title}</h2>
//       <img src={image_url} alt="movie poster" />
//       <p>{summary_short}</p>
//     </div>
//   </div>
// )

export default MovieReviews

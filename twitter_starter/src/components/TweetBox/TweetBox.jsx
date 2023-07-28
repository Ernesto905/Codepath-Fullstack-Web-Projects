import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  
  function handleOnTweetTextChange (evt) {
    props.setTweetText(evt.target.value)
  }

  function handleOnSubmit() {
    let newTweet = [...props.tweets, { 
      id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments:0,
      retweets: 0,
      likes: 0,
    }]  

    props.setTweets(newTweet)
    props.setTweetText('')
  }

  
  let count = props.tweetText.length > 140 || props.tweetText.length >= 1 ? "disable" : "";

  
  return (
    <div className="tweet-box">

      
      <TweetInput 
      value={props.tweetText}
      handleOnChange={handleOnTweetTextChange}
      />
      
      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetLength={props.tweetText.length}/>
        <TweetSubmitButton count={count} handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  
  return <span className= 'tweet-length' >{140 - props.tweetLength}</span>
}

export function TweetSubmitButton({handleOnSubmit}, props) {

  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button onClick={handleOnSubmit} disabled={props.count} className="tweet-submit-button">Tweet</button>
    </div>
  )
}

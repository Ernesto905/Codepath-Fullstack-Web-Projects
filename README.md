# Twitter A/B Test Lab

Twitter has kindly asked Site interns to help them run an A/B test for their new UI. An A/B test is where an experimenter shows different UI screens to users and determines which interface they prefer.

Previously Twitter's feed page looked like this:

![old_twitter](./old-twitter.png)

Go to `https://www.twitter.com` now to see their modern UI.

## Directions

> **Note:** More detailed instructions are available on the [SITE course portal](https://courses.codepath.org/courses/summer_internship_for_tech_excellence/unit/7#!lab)

The goal here is to recreate Twitter's old UI so that it can be used by their team for A/B testing.

Much of the styling has already been provided by Twitter's team, but they'd like Site interns to implement the desired frontend functionality using React - a technology they've recently adopted.

Currently, the `App` component looks like this:

```jsx
export default function App({ userProfile = defaultUserProfile }) {
  const [tweets, setTweets] = useState([])

  const addTweet = (newTweet) => {
    setTweets((oldTweets) => [
      ...oldTweets,
      { ...newTweet, id: oldTweets.length, name: userProfile.name, handle: userProfile.handle },
    ])
  }

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <UserProfile />
        <Feed />
        <Advertisements />
      </main>
    </div>
  )
}

```

It is storing a list of tweets in state and has an `addTweet` function that is used to update state. The `addTweet` function takes in a new tweet and calls the `setTweets` state handler by passing it a fat-arrow function. That function takes the array of tweets currently stored and returns a new array consisting of all the old tweets copied into the new array with `...oldTweets` and then adds the new tweet to the end of the array. The new tweet is copied into an object with `{ ...newTweet }` and then given three new properties - `id`, `name`, and `handle`. The `id` property uniquely identifies the tweet, the `name` property is the name of the currently logged in user, and the `handle` property is the handle of the currently logged in user.

The goal is to take the skeleton app provided here and implement new features to it.

Here are the pieces of functionality Twitter would like interns to implement:

1. `UserProfile` component
   + Make sure props are passed to it correctly
   + Make sure each piece of user information is displayed in the component
2. `Feed` component
   + It should receive two new props - the array of tweets and the handler for adding new tweets.
   + The component should iterate over the list of tweets and display all of them inside the div with a className of `twitter-feed`, right below the first tweet. Make sure to give each new tweet the proper key.
   + It should pass the add tweet handler to the `TweetInput` component so that it can create new tweets.
3. `TweetInput` component
   + Pass the `addTweet` function from the `App` component into the `TweetInput` component
   + Ensure that the text area is working correctly:
     + The text area should be a **controlled** component and leverage React's `useState` hook to do so. Create a `handleOnTweetTextChange` function to update state when the text area input changes.
     + Once the user clicks into the text area in the `TweetInput` component, it should be given the `expanded` class and increase its height. Make sure to use the `onFocus` event handler.
     + If the the user hasn't written any text and they click out of the textarea, it should collapse. Make sure to use the `onBlur` event handler. If they _have_ written text, it should stay expanded.
     + When the text area is expanded, the `fa-image` icon should be changed to a `fa-smile` icon.
   + Provide the `Tweet` button with the proper `onClick` handler so that when the user clicks, it submits the tweet. Create a `handleOnSubmit` function to manage the submit logic.
     + The button should be disabled when the user hasn't enterred any text yet, or they have more than 140 characters in their tweet.
     + Once the user has submitted, the text area should be reset to an empty string - `""`.
   + Update the span with the `tweet-length` className to display the **number of characters left** that are allowed in a user's tweet. 
     + Remember that the max is 140 characters.
     + If the number of characters left is a negative number, make sure the text is red so the user knows they've gone over the limit.

## Stretch Goals

+ `UserProfile` component
  + Add an image to the user profile that is displayed where the avatar icon goes.
+ `Tweet` component
  + Modify the `Tweet` component so that it stores its own internal state. Whenever a user clicks on the heart, it should increment the number of likes for that tweet.
  + Make each `Tweet` component collapsible by clicking on the downward facing chevron icon in the top right of the component.
  + Highlight any hashtags light blue.
  + **Extra Stretch** - create a modal that pops up whenever the user clicks on the retweet icon. It should give the user the ability to retweet that particular tweet and increment the number of retweets. 
+ `TweetInput` component
  + Modify the tweet input text so that any hashtags are highlighted blue.
  + When the user clicks on the smiley face, show them a menu of emojis to add to their tweet. Clicking on an emoji should append it to the tweet text.

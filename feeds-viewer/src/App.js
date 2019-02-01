import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Feed extends Component {
  render() {
    const tweets = this.props.feed.tweets.map((tweet) =>
        <div className="Tweet">
          <div className="TweetURL"><a href="{tweet.url}">{tweet.url}</a></div>
          <div className="TweetText">{tweet.text}</div>
        </div>
    );
    return (
      <div className="Feed">
        <div className="FeedUser">{this.props.feed.user}</div>
        <div className="UserFeedTweets">{tweets}</div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const twitterFeeds = {
      dateTime: '2019-01-01 00:00:01',
      feeds: [
        {
          user: 'user1',
          tweets: [
            {
              url: 'https://www.twitter.com/user1/status/11',
              text: 'tweet 1-1'
            },
            {
              url: 'https://www.twitter.com/user1/status/12',
              text: 'tweet 1-2'
            },
            {
              url: 'https://www.twitter.com/user1/status/13',
              text: 'tweet 1-3'
            }
          ]
        },
        {
          user: 'user2',
          tweets: [
            {
              url: 'https://www.twitter.com/user2/status/21',
              text: 'tweet 2-1'
            },
            {
              url: 'https://www.twitter.com/user2/status/22',
              text: 'tweet 2-2'
            },
            {
              url: 'https://www.twitter.com/user2/status/23',
              text: 'tweet 2-3'
            }
          ]
        }
      ]
    }
    const userFeeds = twitterFeeds.feeds.map((feed) =>
        <Feed feed={feed}></Feed>
    );
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>View Twitter Feeds in React</h1>
        </header>
        <div className="Content">
          <div>
            <h3>Feeds as of {twitterFeeds.dateTime}</h3>
            {userFeeds}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

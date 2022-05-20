import * as React from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <UserProfile />
        <Feed />
        <Advertisements />
      </main>
    </div>
  )
}

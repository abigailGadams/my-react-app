import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

import Search from "./Search";
import Posts from "./components/Posts";
import { useState } from "react";

const posts = [
  { id: "1", name: "This first post is about React" },
  { id: "2", name: "This next post is about Preact" },
  { id: "3", name: "We have yet another React post!" },
  { id: "4", name: "This is the fourth and final post" },
];

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

const { search } = window.location;
const query = new URLSearchParams(search).get("s");

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <div className="App">
      <header className="App-header">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.key}>{post.name}</li>
          ))}
        </ul>
        <Logo style={{ height: 200 }} />
        <h1>React Posts Sharer</h1>
        <h3>Build Sign Up & Login UI Template in React</h3>
      </header>
      <Posts />
    </div>
  );
};

export default App;

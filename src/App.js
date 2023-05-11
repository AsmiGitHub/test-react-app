import Comments from "./components/Comments";

const App = () => {
  return (
    <div>
      <h1>Ally comment application</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
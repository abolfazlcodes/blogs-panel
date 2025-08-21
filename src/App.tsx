import { useState } from "react";
import BlogTextEditor from "./components/BlogTextEditor";

function App() {
  const [content, setContent] = useState(`
    
      <h1>hello</h1>
      <blockquote>Nothing is impossible</blockquote>
    `);

  return (
    <div className="w-full p-4 min-h-svh">
      <BlogTextEditor
        content={content}
        onChange={(editorContent) => setContent(editorContent)}
      />
    </div>
  );
}

export default App;

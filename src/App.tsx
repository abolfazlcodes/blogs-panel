import { useState } from "react";
import BlogTextEditor from "./components/BlogTextEditor";

function App() {
  const [content, setContent] = useState("hello");

  return (
    <div className="border border-red-500 w-full p-4 min-h-svh">
      <BlogTextEditor
        content={content}
        onChange={(editorContent) => setContent(editorContent)}
      />
    </div>
  );
}

export default App;

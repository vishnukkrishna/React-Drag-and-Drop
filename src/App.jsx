import React, { useState } from "react";
import "./App.css";

import { closestCorners, DndContext } from "@dnd-kit/core";

function App() {
  const [task, setTask] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  return (
    <>
      <div className="App">
        <h1>My Tasks ✅</h1>
        <DndContext collisionDetection={closestCorners}>
          {/* Your DnD components go here */}
        </DndContext>
      </div>
    </>
  );
}

export default App;

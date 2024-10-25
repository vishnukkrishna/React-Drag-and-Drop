import React from "react";
import "./Column.css";

import { Task } from "../Task/Task";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export const Column = ({ tasks }) => {
  return (
    <div className="column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </SortableContext>
    </div>
  );
};

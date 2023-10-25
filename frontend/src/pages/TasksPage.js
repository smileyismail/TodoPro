import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TasksList from "../components/Tasks/TasksList";

import { tasksSliceActions } from "../store/tasksSlice";
import {
  postTask,
  fetchTasks,
  deleteTask,
  updateTask,
} from "../utils/taskhttp";

const TasksPage = () => {
  const tasks = useSelector((state) => state.tasksStore.tasks);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   let isMounted = true;

  //   async function fetchAndSetTasks() {
  //     try {
  //       const tasks = await fetchTasks();

  //       if (isMounted) {
  //         dispatch(tasksSliceActions.setTasks(tasks));
  //       }
  //     } catch (err) {
  //       console.error("Error while fetching tasks:", err);
  //     }
  //   }

  //   fetchAndSetTasks();

  //   // Cleanup function to set the mounted state to false when the component unmounts
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [dispatch]);

  const addTaskHandler = async (taskData) => {
    try {
      const task = await postTask(taskData);
      dispatch(tasksSliceActions.addTask({ ...task }));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTaskHandler = async (id) => {
    try {
      await deleteTask(id);
      dispatch(tasksSliceActions.removeTask(id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateTaskHandler = async (id, updatedData) => {
    try {
      await updateTask(id, updatedData);
      dispatch(tasksSliceActions.updateTask({ id: id, data: updatedData }));
    } catch (error) {
      console.log(error);
    }
  };

  const taskCheckHandler = async (id, check) => {
    const data = { check: check };
    try {
      await updateTask(id, data);
      dispatch(tasksSliceActions.checkTask({ id: id, check: check }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto w-[90%] max-w-3xl">
      <TasksList
        tasks={tasks}
        addTaskHandler={addTaskHandler}
        deleteTaskHandler={deleteTaskHandler}
        taskCheckHandler={taskCheckHandler}
        updateTaskHandler={updateTaskHandler}
      />
    </div>
  );
};

export default TasksPage;

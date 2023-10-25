import React, { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";

import TaskTile from "./TaskTile";
import Modal from "../UI/Modal";
import TaskForm from "./TaskForm";

const TasksList = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const {
    tasks,
    addTaskHandler,
    deleteTaskHandler,
    taskCheckHandler,
    updateTaskHandler,
  } = props;

  const unCheckedTasks = tasks.filter((task) => task.check === false);
  const checkedTasks = tasks.filter((task) => task.check === true);

  const renderTaskTiles = (taskList) => {
    return taskList.map((task) => (
      <li
        key={task._id}
        className="border-b-[1px] border-neutral-300 pb-6 pt-3"
      >
        <TaskTile
          task={task}
          deleteTaskHandler={deleteTaskHandler}
          taskCheckHandler={taskCheckHandler}
          updateTaskHandler={updateTaskHandler}
        />
      </li>
    ));
  };

  return (
    <div>
      <ul className="rounded-md bg-white p-3">
        {unCheckedTasks.length <= 0 && (
          <li className="border-b-[1px] border-neutral-300 pb-6 pt-3 text-center text-lg">
            No Pending Tasks...
          </li>
        )}
        {renderTaskTiles(unCheckedTasks)}
        <li className="pb-6 pt-3">
          <button
            onClick={() => setOpenModal(true)}
            className="inline-flex items-center justify-center gap-3 duration-150 hover:opacity-70"
          >
            <AiOutlinePlus className="text-rose-600" />
            Add Task
          </button>
        </li>

        {renderTaskTiles(checkedTasks)}
      </ul>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <TaskForm setOpenModal={setOpenModal} addTaskHandler={addTaskHandler} />
      </Modal>
    </div>
  );
};

export default TasksList;

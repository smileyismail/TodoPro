import React, { useState } from "react";

import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "../UI/Modal";
import TaskForm from "./TaskForm";

const TaskTile = (props) => {
  const { task, deleteTaskHandler, taskCheckHandler, updateTaskHandler } =
    props;

  const [openModal, setOpenModal] = useState(false);
  const [isChecked, setIsChecked] = useState(task.check);

  const checkboxChangeHandler = (e) => {
    setIsChecked((prevState) => !prevState);
    taskCheckHandler(task._id, e.target.checked);
  };

  const deleteClickHandler = () => {
    deleteTaskHandler(task._id);
  };

  const modalOpenHandler = () => {
    setOpenModal(true);
  };

  return (
    <section className="inline-flex w-full items-center justify-between">
      <div className="inline-flex w-[90%] items-center">
        <input
          type="checkbox"
          name="check"
          checked={isChecked}
          onChange={checkboxChangeHandler}
          className="mr-2 h-6 w-6 rounded-full border border-neutral-300 text-neutral-500 hover:bg-neutral-300 focus:ring-neutral-400 focus:ring-opacity-25"
        />
        <div onClick={modalOpenHandler} className="flex-grow">
          <p className={`${task.check ? "line-through" : ""}`}>
            {task?.taskName}
          </p>
        </div>
      </div>

      <div>
        <button onClick={deleteClickHandler}>
          <RiDeleteBin5Line className="text-xl text-rose-600 duration-150 hover:text-rose-400 active:scale-110" />
        </button>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <TaskForm
          setOpenModal={setOpenModal}
          selectedTask={task}
          updateTaskHandler={updateTaskHandler}
        />
      </Modal>
    </section>
  );
};

export default TaskTile;

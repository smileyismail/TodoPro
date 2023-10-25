import React, { useState } from "react";

const TaskForm = (props) => {
  const { setOpenModal, addTaskHandler, selectedTask, updateTaskHandler } =
    props;

  const initialTaskData = {
    taskName: selectedTask ? selectedTask.taskName : "",
    check: false,
  };

  const [taskData, setTaskData] = useState(initialTaskData);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const onCancelHandler = () => {
    setOpenModal(false);
    setTaskData(initialTaskData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedTask) {
      updateTaskHandler(selectedTask._id, taskData);
    } else {
      addTaskHandler(taskData);
    }

    setTaskData(initialTaskData);
    setOpenModal(false);
  };

  const formSubmitTitle = selectedTask ? "Save" : "Add";

  return (
    <form onSubmit={submitHandler} className="pt-6">
      <div className="max-w-sm">
        <input
          type="text"
          placeholder="Task name"
          onChange={onChangeHandler}
          name="taskName"
          value={taskData.taskName}
          required
          className="w-[340px] rounded-md border-[1px] border-purple-600 px-2 py-2 text-neutral-900 outline-0 duration-200 hover:border-purple-500"
        />
      </div>

      <div className=" mt-6 flex items-center justify-end">
        <button
          type="button"
          onClick={onCancelHandler}
          className="rounded-md border-purple-600  px-6 py-2  font-medium text-neutral-900 duration-200 hover:text-purple-500"
        >
          cancel
        </button>
        <button
          type="submit"
          className="rounded-md border-purple-600 bg-purple-600 px-6 py-2  font-medium text-neutral-100 duration-200 hover:bg-purple-500"
        >
          {formSubmitTitle}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

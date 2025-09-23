"use client";

import { ITask } from "@/types/tasks"
import { CiEdit, CiTrash  } from "react-icons/ci";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.title);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);


  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      await editTodo({
         id: task.id,
         title: taskToEdit,
     })
      setOpenModalEdit(false);
      router.refresh();
    };
  
  const handleDeleteTask = async (id: string) => {
      await deleteTodo(id);
      setOpenModalDelete(false);
      router.refresh();
  }

  return (
    <tr key={task.id}>
        <td>{task.id}</td>
        <td>{task.title}</td>
        <td className="flex gap-2">
          <CiEdit onClick={() => setOpenModalEdit(true)} className="cursor-pointer text-green-400" size={25} />
            <Modal modalIsOpen={openModalEdit} setModalIsOpen={setOpenModalEdit}>
              <form onSubmit={handleSubmitEditTodo} className="w-full">
                <h3 className="font-bold text-lg">Edit task</h3>
                <div className="modal-action">
                  <input value={taskToEdit} onChange={(e) => setTaskToEdit(e.target.value)} type="text" placeholder="Type here" className="input w-full" />
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </Modal>
          <CiTrash onClick={() => setOpenModalDelete(true)} className="cursor-pointer text-red-400" size={25} />
            <Modal modalIsOpen={openModalDelete} setModalIsOpen={setOpenModalDelete}>
              <h3 className="font-bold text-lg">Are you sure, you want to delete this task?</h3>
              <div className="modal-action">
                <button onClick={() => handleDeleteTask(task.id)} className="btn">Yes</button>
              </div>
            </Modal>
        </td>
    </tr>
  )
}

export default Task
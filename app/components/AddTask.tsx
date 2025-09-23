"use client"

import { CiSquarePlus } from "react-icons/ci";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addNewTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {

  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addNewTodo({
      id: uuidv4(),
      title: newTaskValue,
    })
    setNewTaskValue("");
    setModalIsOpen(false);
    router.refresh();
  };

  return (
    <div>
        <button onClick={() => setModalIsOpen(true)} className="btn btn-primary w-full">
          Add new task
          <CiSquarePlus size={25} className="inline-block" />
        </button>

        <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
          <form onSubmit={handleSubmitNewTodo} className="w-full">
            <h3 className="font-bold text-lg">Add a new task</h3>
            <div className="modal-action">
              <input value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value)} type="text" placeholder="Type here" className="input w-full" />
              <button type="submit" className="btn btn-primary">
                Add Task
              </button>
            </div>
          </form>
        </Modal>
    </div>
  )
}

export default AddTask
import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectHeader() {
  const [isCreateOpen, setIsCreatOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8">
      <h1 className="font-bold  md:text-2xl">پروژه های شما</h1>
      <button
        onClick={() => setIsCreatOpen(true)}
        className="btn btn--primary flex items-center">
        <HiPlus className="text-lg ml-1" />
        <span className="text-sm md:text-lg">ایجاد پروژه جدید</span>
      </button>
      <Modal
        title={`پروژه جدید`}
        open={isCreateOpen}
        onClose={() => setIsCreatOpen(false)}>
        <CreateProjectForm onClose={() => setIsCreatOpen(false)} />
      </Modal>
    </div>
  );
}

export default ProjectHeader;

import React, { useState } from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
import { HiPlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
function ProjectsTabel() {
  const { projects, isLoading } = useOwnerProjects();
  const [isCreateOpen, setIsCreatOpen] = useState(false);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          هیچ پروژه ای یافت نشد
        </h1>
      </div>
    );
  }
  return (
    <div>
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
          <CreateProjectForm />
        </Modal>
      </div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت پروژه</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProjectsTabel;

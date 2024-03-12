import React, { useState } from "react";
import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/formatNumber";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { truncateText } from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removePproject, isDeleting } = useRemoveProject();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center max-w-[200px]">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {project.status == "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>
        <button onClick={() => setIsEditOpen(true)}>
          <TbPencilMinus className="icon icon--edit" />
        </button>
        <Modal
          title={`ویرایش ${project.title}`}
          open={isEditOpen}
          onClose={() => setIsEditOpen(false)}>
          this is modal
        </Modal>
        <button onClick={() => setIsDeleteOpen(true)}>
          <HiOutlineTrash className="icon icon--error" />
        </button>
        <Modal
          title={`حذف ${project.title}`}
          open={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}>
          <ConfirmDelete
            resurse={project.title}
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={() =>
              removePproject(project._id, {
                onSuccess: () => setIsDeleteOpen(false),
              })
            }
            disabled={false}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;

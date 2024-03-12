import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: " عنوان باید حداقل ۱۰ کاراکتر باشد ",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "نوضیحات ضروری است",
          minLength: {
            value: 30,
            message: " عنوان باید حداقل ۳۰ کاراکتر باشد ",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه پروژه"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: " بودجه ضروری است ",
        }}
        errors={errors}
      />
      <button type="submit" className="btn btn--primary w-full ">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;

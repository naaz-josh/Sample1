import * as Yup from "yup"
export const RegisterSchema = Yup.object().shape({
    title: Yup.string().min(2).max(25).required("Title is mandatory"),
    desc: Yup.string().min(30).max(120).required("Description is mandatory"),
    due_date: Yup.date().required("Due Date is mandatory"),
  });
import { useFormik } from "formik";
import { RegisterSchema } from "../schemas"

const initialValues = {
    title: "",
    desc: "",
    assignee: "Naaz",
    due_date: "",
}

const Registration = () => {

    const { values, touched, handleChange, handleBlur, handleSubmit, errors } = useFormik({
        initialValues, validationSchema: RegisterSchema, onSubmit: (values, action) => {
         action.resetForm()
        }
        
    })
    console.log(values)
    return (
        <div>
            <div className="container">
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-left">
                            <h1 className="modal-title">Welcome!</h1>
                            <p className="modal-description">To the best site for programmers:</p>
                            <form onSubmit={handleSubmit}>
                                <div className="input-block">
                                    <label htmlFor="title" className="input-label">Title</label>
                                    <input type="text"
                                        autoComplete="off"
                                        name="title"
                                        id="title"
                                        placeholder="Title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                    />
                                    {errors.title && touched.title ? <p className="form-error">{errors.title}</p> : null}
                                </div>
                                <div className="input-block">
                                    <label htmlFor="description" className="input-label">Description</label>
                                    <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Write your desciption here...."
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.desc}></textarea>
                                    {errors.desc && touched.desc ? <p className="form-error">{errors.desc}</p> : null}
                                </div>
                                <div className="input-block">
                                    <label htmlFor="assignee" className="input-label">Assignee:</label>
                                    <select name="assignee" id="assignee"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.assignee}>
                                        <option value="Naaz">Naaz</option>
                                        <option value="naziya">Naziya</option>
                                    </select>
                                    {errors.assignee && touched.assignee ? <p className="form-error">{errors.assignee}</p> : null}
                                </div>
                                <div className="input-block">
                                    <label htmlFor="due_date" className="input-label">Due Date:</label>
                                    <input type="date" id="due_date" name="due_date"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.due_date} />
                                    {errors.due_date && touched.due_date ? <p className="form-error">{errors.due_date}</p> : null}
                                </div>
                                <div className="modal-buttons">
                                    <button className="input-button" type="submit">
                                        Submit
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Registration;
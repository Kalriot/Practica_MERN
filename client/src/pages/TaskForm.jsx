import { Formik, Form, Field } from "formik";
import "./TaskForm.css"; // Importar el archivo CSS
import { useTasks } from "../context/TaskProvider.jsx";

function TaskForm() {
  const { createTask } = useTasks();
  return (
    <div className="task-form-container">
      <h1>New Task</h1>
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={async (values, actions) => {
          createTask(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="task-form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field
                type="text"
                id="title"
                name="title"
                placeholder="Write a title"
                onChange={handleChange}
                value={values.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Write a description"
                onChange={handleChange}
                value={values.description}
              />
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Create Task"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;

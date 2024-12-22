import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks");
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las tareas",
      error: error,
    });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la tarea",
      error: error,
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [title, description]
    );
    res.json({
      message: "Nueva tarea creada",
      body: {
        task: { title, description },
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear la tarea",
      error: error,
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      "UPDATE tasks SET title = ?, description = ? WHERE id = ?",
      [title, description, req.params.id]
    );
    res.json({ message: "Tarea actualizada" });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la tarea",
      error: error,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la tarea",
      error: error,
    });
  }
};

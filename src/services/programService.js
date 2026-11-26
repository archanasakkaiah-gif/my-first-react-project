import api from "./api";

export const getPrograms = async () => {
  const { data } = await api.get("/programs");
  return data;
};

export const getProgramById = async (id) => {
  const { data } = await api.get(`/programs/${id}`);
  return data;
};

export const createProgram = async (programData) => {
  const { data } = await api.post("/programs", programData);
  return data;
};

export const updateProgram = async (id, programData) => {
  const { data } = await api.put(`/programs/${id}`, programData);
  return data;
};

export const deleteProgram = async (id) => {
  const { data } = await api.delete(`/programs/${id}`);
  return data;
};

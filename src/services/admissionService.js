import api from "./api";

export const getAdmissions = async (params = {}) => {
  const { data } = await api.get("/admissions", { params });
  return data;
};

export const getAdmissionById = async (id) => {
  const { data } = await api.get(`/admissions/${id}`);
  return data;
};

export const createAdmission = async (admissionData) => {
  const { data } = await api.post("/admissions", admissionData);
  return data;
};

export const updateAdmission = async (id, admissionData) => {
  const { data } = await api.put(`/admissions/${id}`, admissionData);
  return data;
};

export const updateAdmissionStatus = async (id, admissionStatus) => {
  const { data } = await api.patch(`/admissions/${id}/status`, { admissionStatus });
  return data;
};

export const deleteAdmission = async (id) => {
  const { data } = await api.delete(`/admissions/${id}`);
  return data;
};

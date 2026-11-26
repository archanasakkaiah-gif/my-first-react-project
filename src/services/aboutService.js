import api from "./api";

export const getAboutInfo = async () => {
  const { data } = await api.get("/about");
  return data;
};

export const addAboutInfo = async (aboutData) => {
  const { data } = await api.post("/about", aboutData);
  return data;
};

export const updateAboutInfo = async (id, aboutData) => {
  const { data } = await api.put(`/about/${id}`, aboutData);
  return data;
};

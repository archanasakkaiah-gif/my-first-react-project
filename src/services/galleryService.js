import api from "./api";

export const getGalleryImages = async () => {
  const { data } = await api.get("/gallery");
  return data;
};

export const addGalleryImage = async (formDataOrJson, isMultipart = false) => {
  const config = isMultipart
    ? { headers: { "Content-Type": "multipart/form-data" } }
    : {};
  const { data } = await api.post("/gallery", formDataOrJson, config);
  return data;
};

export const updateGalleryImage = async (id, formDataOrJson, isMultipart = false) => {
  const config = isMultipart
    ? { headers: { "Content-Type": "multipart/form-data" } }
    : {};
  const { data } = await api.put(`/gallery/${id}`, formDataOrJson, config);
  return data;
};

export const deleteGalleryImage = async (id) => {
  const { data } = await api.delete(`/gallery/${id}`);
  return data;
};

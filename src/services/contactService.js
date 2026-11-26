import api from "./api";

// Enquiries
export const createEnquiry = async (enquiryData) => {
  const { data } = await api.post("/enquiries", enquiryData);
  return data;
};

export const getEnquiries = async () => {
  const { data } = await api.get("/enquiries");
  return data;
};

export const updateEnquiry = async (id, enquiryData) => {
  const { data } = await api.put(`/enquiries/${id}`, enquiryData);
  return data;
};

export const updateEnquiryStatus = async (id, enquiryStatus) => {
  const { data } = await api.patch(`/enquiries/${id}/status`, { enquiryStatus });
  return data;
};

export const deleteEnquiry = async (id) => {
  const { data } = await api.delete(`/enquiries/${id}`);
  return data;
};

// Campus Tours
export const createTour = async (tourData) => {
  const { data } = await api.post("/tours", tourData);
  return data;
};

export const getTours = async () => {
  const { data } = await api.get("/tours");
  return data;
};

export const updateTour = async (id, tourData) => {
  const { data } = await api.put(`/tours/${id}`, tourData);
  return data;
};

export const deleteTour = async (id) => {
  const { data } = await api.delete(`/tours/${id}`);
  return data;
};

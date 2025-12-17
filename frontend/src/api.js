
export const createUser = async (userData) => {
  const res = await fetch(`"http://localhost:3000/api/auth/"`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  });
  return res.json();
};
// src/api.js (frontend)
export const loginUser = async (email, password) => {
  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// export const token = localStorage.getItem("token");
// await fetch(`http://localhost:3000/api/reports/update/${id}`, {
//   method: "PUT",
//   headers: {
//     Authorization: `Bearer ${token}`
//   },
//   // if JSON:
//   body: JSON.stringify({ status: "In Progress" })
// });


// helper to build auth headers
//export const authHeaders = (token) => ({
 // "Content-Type": "application/json",
 // Authorization: `Bearer ${token}`
//});

export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const API_URL = "http://localhost:3000/api/reports";

export const createReport = async (data) => {
  return await fetch(`${API_URL}/reports/create`, {
    method: "POST",
    body: data
  }).then(res => res.json());
};

export const fetchReports = async () => {
  const res = await fetch(`${API_URL}/reports`, {
    headers: getAuthHeaders()
  });
  return res.json();
};

export const getReports = async () => {
  return await fetch(API_URL).then(res => res.json());
};

export const updateReportStatus = async (id, status) => {
  return await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  }).then(res => res.json());
};

export const deleteReport = async (id) => {
  const res = await fetch(`${API_URL}/reports/delete/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  });
  return res.json();
};

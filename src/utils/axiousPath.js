const AXIOS = (id = "") => {
  return `http://localhost:3000/api/v1/post/${id}`;
};
export default AXIOS;

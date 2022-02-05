import http from "../http-common";

class KitDataService {
  getAll(page = 0) {
    return http.get(`getkitData?page=${page}`);
  }

  get(id) {
    return http.get(`/getSpecificKit_?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`getkitData?${by}=${query}&page=${page}`);
  } 

 // createReview(data) {
 //   return http.post("/review-new", data);
 // }

 // updateReview(data) {
 //   return http.put("/review-edit", data);
 // }

 // deleteReview(id, userId) {
 //   return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
 // }

 // getCuisines(id) {
 //   return http.get(`/cuisines`);
 // }

}

export default new KitDataService();
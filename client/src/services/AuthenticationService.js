import Api from "@/services/Api";

export default {
  register(credentials) {
    // crendentials thong tin xac thuc.
    return Api().post("register", credentials);
  },
};

// AuthenticationService.register {
//   email: "testing@gmail.com",
//   password:"123456"
// }

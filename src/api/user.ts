import request from "@/request/index";

interface LoginUser {
  user: {
    email: string;
    password: string;
  };
}

interface RegisterUser {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

export const Login = (data: LoginUser) => {
  return request({
    method: "post",
    url: "/api/users/login",
    data,
  });
};

export const Register = (data: RegisterUser) => {
  return request({
    method: "post",
    url: "/api/users",
    data,
  });
};

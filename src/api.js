import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBvD1tyuIp8MesMSqoViHJLtOlrKZIcyR8",
  },
});

export default request;

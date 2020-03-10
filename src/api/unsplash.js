import axios from "axios";

export default axios.create({
  headers: {
    Authorization: "Client-ID CM-6ZgPt3I7SKiw4dcdcIP9EI391x11ykeC2HRS8Gw4"
  },
  baseURL: "https://api.unsplash.com/",
});


import axios from "axios"

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses/`,
  headers: {
    Authorization:
      "Bearer zdHTwVmKuD0b0lSpO1e0XsZVq-IuIvnkPqt5-Y3Ke0Qj8nXOiBG1HKGpgxOsVe7aIk-t1H2zBkgI9HpCWJCIlTRBZnj12TdSQRjkLYLeZ1uTPgnIdK5OT_UNW28dYHYx"
  }
})

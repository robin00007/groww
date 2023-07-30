import axios from "axios";

const userDetails = async (username) => {
    const result = await axios({
        method: "get",
        url: `https://api.unsplash.com/users/${username}?client_id=gB0miyPX9vZmDP8BK8Ltc9co495f4xQyoA3QPcCgB7Y`,
      }) 
      return result.data;
}
export default userDetails;
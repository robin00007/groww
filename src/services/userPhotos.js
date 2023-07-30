import axios from "axios";

const userPhotos=async(username,pageNumber)=>{
    const result = await axios({
        method: "get",
        url: `https://api.unsplash.com/users/${username}/photos?page=${pageNumber}&client_id=gB0miyPX9vZmDP8BK8Ltc9co495f4xQyoA3QPcCgB7Y&per_page=10`,
      }) 
      return result.data;
}
export default userPhotos;
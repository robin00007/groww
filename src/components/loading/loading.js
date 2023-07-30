import { useSelector } from "react-redux";

import styles from "./loading.module.css";
const Loading = () => {

    const loading= useSelector((state)=>state.isloading);
    
    /////////UI loigc //////////////////////////
    if(loading){
        return <div className={styles.moreLoader}>loading......</div>
    }
    
}
export default Loading
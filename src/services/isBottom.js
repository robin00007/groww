import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../redux/slice/feedSlice";

export default function useBottom(containerRef,item) {
  const dispatch=useDispatch();
  const page=useSelector((state)=>state.feed.page);

  useEffect(() => {
    const options = {
      root: document.getElementById("grid"),  
      rootMargin: '10px',  
      threshold: 0.5,
    };
    console.log("stated");
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.intersectionRatio === 1.0) {
          console.log('Reached the bottom of the scroll!');
          dispatch(addPage());
          
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
      return () => {
        observer.unobserve(container);
      };
    }
  }, [item]);
}
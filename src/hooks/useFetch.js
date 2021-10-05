import { useEffect, useRef, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
   const isMounted = useRef(true)
   const [state, setState] = useState({
      data: null,
      loading: true,
      error: null,
   });

   useEffect(() => {
      return () => {
         isMounted.current = false
      }
   }, [])

   useEffect(() => {
      
      setState({
         loading: true,
         error: null,
         data: null,
      });

      axios.get(url)
         /* .then((res) => res.json()) */
         .then((data) => {
            if(isMounted.current){
               setState({
                  loading: false,
                  error: null,
                  data,
               });
            }
         })
   }, [url]);

   return state;
};

export default useFetch;

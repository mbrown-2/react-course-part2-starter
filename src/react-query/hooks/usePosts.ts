import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = () => {
    const getForms = () => 
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.data);

    return useQuery<Post[], Error>({
        queryKey: ["forms"],
        queryFn: getForms,
        staleTime: 1 * 60 * 1000 // 1m
    });
};

export default usePosts;
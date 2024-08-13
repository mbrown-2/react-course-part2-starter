import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = (userId: number | undefined) => {
    const getForms = () => 
        axios.get('https://jsonplaceholder.typicode.com/posts', {params: {
            userId
        }})
        .then(res => res.data);

    return useQuery<Post[], Error>({
        // Keys are defined in a hierarchical fashion (left = precedence)
        // follows conventions of URL paths
        // i.e. /users/4/posts
        queryKey: userId ? ["users", userId, "posts"] : ["posts"],
        queryFn: getForms,
        staleTime: 1 * 60 * 1000 // 1m
    });
};

export default usePosts;
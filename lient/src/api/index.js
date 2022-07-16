import axios from  'axios';

//fetching all the posts 

const url='http://localhost:8080/posts';

export const fetchPosts = () =>axios.get(url);
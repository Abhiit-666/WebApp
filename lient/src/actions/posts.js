import * as api from '../api';

// using api so that we can call fetch and similar functions as apis

export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({type:'FETCH_ALL' , payload: data });
    } catch (error) {
        
    }


};

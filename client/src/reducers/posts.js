export default (posts =[],action)=>{
     
    switch (action.type) {
        case 'CREATE':
            return [...posts,action.payload];
        case 'FETCH_ALL':
            // since the api.fetch is returning all the data in the payload.
            return action.payload;
    
        default:
            return posts;
    }
}
import axios from 'axios';

const searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID w-7loe1aBk4_rQ09h3ThKlqNec8qICIWU4OyhmKK3Rg'
        },
        params:{
            query: term,
        }
    });
    
    return response.data.results;
};

export default searchImages;
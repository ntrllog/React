import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyCiloAm6_zAb02pJX9X-nBv2TH0CctfG9o';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);
  
  const search =  async(term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
        q: term
      }
    });
    
    setVideos(response.data.items);
  };
  
  return [videos, search];
};

export default useVideos;

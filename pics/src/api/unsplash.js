import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Aukx3hhJblodyexpgzEa9D3fpGAJSDGdCVvabCFPuuM'
  }
});
import React, {useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm}= useParams();
  console.log(searchTerm);
  //immediately fetch data as the page loads
  //useEffect is a lifecycle hook which gets called when the component initially loads
  useEffect ( () => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then( (data) => setVideos(data.items));
  }, [searchTerm]); 
  // if dependancy array is empty. the code insise this function only runs when we reload the page
  // if there is a value, then it will reload when the dependacy value changes

  return (
    <Box p={2} sx={{overFlowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'whitesmoke'}}>
        Search Results for : <span style={{color: '#F31503'}}>{searchTerm}</span> Videos
      </Typography>

      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed;

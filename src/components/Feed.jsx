import React, {useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar , Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  //immediately fetch data as the page loads
  //useEffect is a lifecycle hook which gets called when the component initially loads
  useEffect ( () => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then( (data) => setVideos(data.items));
  }, [selectedCategory]); 
  // if dependancy array is empty. the code insise this function only runs when we reload the page
  // if there is a value, then it will reload when the dependacy value changes

  return (
    <Stack sx={{flexDirection: 
        {sx: "column", md: "row"}}}>
      <Box sx={{height: { sx: 'auto', md: '92vh'}, 
      borderRight: '1px solid #3d3d3d', 
      px: { sx: 0, md: 2}}}>
        <Sidebar 
          selectedCategory= {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
        
        />
        <Typography className="copyright" variant="body2" 
          sx= {{ mt:1.5, color: "#fff"}}>
          Copyright 2023 Pramitha React Apps
        </Typography>
      </Box>
      <Box p={2} sx={{overFlowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'whitesmoke'}}>
          {selectedCategory} <span style={{color: '#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>

  )
}

export default Feed;

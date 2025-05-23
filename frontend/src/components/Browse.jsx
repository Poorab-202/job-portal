import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import useGetSearchedJobs from '../hooks/useGetSearchedJobs';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '../redux/jobSlice';

export default function Browse() {
  const dispatch = useDispatch();
  const { searchedJobs } = useSelector(store => store.job);

  useGetSearchedJobs();

  useEffect(() => {
    return () => {
      // Reset search query when component unmounts
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto my-10'>
        <h1 className='font-medium text-lg my-6'>Search Results ({searchedJobs?.length})</h1>
        <div className='grid grid-cols-3 gap-4'>
          {searchedJobs?.map((element) => (
            <Job key={element._id} job={element} />
          ))}
        </div>
      </div>
    </div>
  );
}


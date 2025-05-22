import Navbar from '../../components/shared/Navbar'
import React, { useEffect } from 'react'
import ApplicatsTable from './ApplicatsTable'
import { useParams } from 'react-router-dom';
import { APPLICATION_API_END_POINT } from '../../utils/constant'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '../../redux/ApplicationSlice';

export default function Applicants() {
  const dispatch = useDispatch();
  const params = useParams();
  const {applicants} = useSelector(store=>store.application)
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
        console.log(res.data);
        
        if (res.data.success) {
          dispatch(setAllApplicants(res.data.applications));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllApplicants();
  }, [dispatch]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto">
        <h1 className='font-bold text-xl my-5'>Applicants {applicants.length}</h1>
        <ApplicatsTable></ApplicatsTable>
      </div>
    </div>
  )
}

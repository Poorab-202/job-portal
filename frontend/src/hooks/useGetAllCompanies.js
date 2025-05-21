import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux"
import {COMPANY_API_END_POINT} from "../utils/constant"
import { setCompanies} from '../redux/companySlice'

export default function useGetAllCompanies() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, { withCredentials: true });
        console.log(res.data);
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);

      }
    }
    fetchCompanies();
  },[dispatch])
}


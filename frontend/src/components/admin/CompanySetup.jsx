import { Button } from '../ui/button'
import Navbar from '../shared/Navbar'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '../../utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import useGetCompanyById from '../../hooks/useGetCompanyById'

export default function CompanySetup() {
  const params = useParams();
  useGetCompanyById(params.id);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(
    {
      name: "",
      description: "",
      website: "",
      location: "",
      file: null
    });
  const { singleCompany } = useSelector(store => store.company);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name)
    formData.append("description", input.description)
    formData.append("website", input.website)
    formData.append("location", input.location)

    if (input.file) {
      formData.append("file", input.file);

    }

    try {
      setLoading(true);
      const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null
    })
  },[singleCompany]);

  return (
    <div>

      <Navbar></Navbar>
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className='flex items-center gap-5 p-8'>
            <Button onClick={()=>navigate("/admin/companies")} className="flex items-center gap-2 font-semibold bg-black text-white px-4 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 shadow-lg cursor-pointer">
              <ArrowLeft>
              </ArrowLeft>
              <span>Back</span>
            </Button>
            <h1 className='font-bold text-xl'>Company Setup</h1>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label>Company Name
              </Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
              ></Input>
            </div>
            <div>
              <Label>description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
              ></Input>
            </div>
            <div>
              <Label>Website</Label>
              <Input
                type="text"
                name="website"
                value={input.website}
                onChange={changeEventHandler}
              ></Input>
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
              ></Input>
            </div>
            <div>
              <Label>Logo</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
              ></Input>
            </div>
          </div>
          {
            loading ? <Button className="w-full my-3 bg-black text-white"><Loader2 className='mr-2 h-4 w-4 animate-spin'>  </Loader2> Please wait</Button> : <Button variant="outline" type="submit" className="w-full my-3 bg-black text-white hover:bg-gray-800 cursor-pointer">Submit</Button>
          }
        </form>
      </div>
    </div>
  )
}

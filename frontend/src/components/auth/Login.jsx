import { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';


export default function Login() {

  const [input, setInput] = useState({
    email: '',
    password: '',
    role: '',
  })
  const { loading } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();  // dispatch function from react-redux 
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }


  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        }
        ,
        withCredentials: true
      })
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);

    }

    finally {
      dispatch(setLoading(false));
    }

  }
  const { user } = useSelector(store => store.auth);
  useEffect(() => {
    if (user) navigate("/")
  }, [])



  return (
    <div>
      <Navbar />
      <div className='flex item-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-grey-200 p-4 my-10 rounded-3xl'>
          <div className='flex flex-col items-center'><h1 className='font-bold text-xl mb-5'>Login</h1></div>
          <div className='my-2'>
            <Label>E-mail</Label>
            <Input type="email" value={input.email} name="email" onChange={changeEventHandler} placeholder="abc@gmail.com" />
          </div>

          <div className='my-2'>
            <Label>Password</Label>
            <Input type="password" value={input.password} name="password" onChange={changeEventHandler} placeholder="XXXXXXXX" />
          </div>
          <div className='flex items-center gap-3'>

            <Label>Role</Label>
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="student" checked={input.role === 'student'} onChange={changeEventHandler} />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="recruiter" checked={input.role === 'recruiter'} onChange={changeEventHandler} className="cursor-pointer" />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>

          </div>
          {
            loading ? <Button className="w-full my-3 bg-black text-white"><Loader2 className='mr-2 h-4 w-4 animate-spin'>  </Loader2> Please wait</Button> : <Button variant="outline" type="submit" className="w-full my-3 bg-black text-white hover:bg-gray-800 cursor-pointer">Login</Button>
          }


          <span className='text-sm'>Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link></span>
        </form>
      </div>
    </div>
  );
}
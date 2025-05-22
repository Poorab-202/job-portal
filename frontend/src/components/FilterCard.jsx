import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '../redux/jobSlice';

const filterData = [
  {
    filterType: "Location",
    values: ["Remote", "Noida", "Hyderabad", "New York", "San Francisco", "Bangalore"]
  },
  {
    filterType: "Domain",
    values: ["Software Engineering", "Data Science", "Design", "Marketing", "Product Management"]
  },
  {
    filterType: "Salary",
    values: ["< 5 LPA", "5-10 LPA", "10-20 LPA", "> 20 LPA"]
  }
];

export default function FilterCard() {
  const dispatch=useDispatch();
  const [selectedValue, setSelectedValue] = useState('');
  const ChangeHandler = (value) => {
    setSelectedValue(value);
  }
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue])
  return (
    <div>
      <h1 className='text-lg'>Apply Filters</h1>
      <hr className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 border-0 rounded-lg shadow-md mt-3 mb-1" />
      <RadioGroup value={selectedValue} onValueChange={ChangeHandler}>
        {
          filterData.map((filter, index) => (
            <div>
              <h1 className='font-medium'>{filter.filterType}</h1>
              {
                filter.values.map((data, idx) => {
                  const itemId = `id${index}-${idx}`
                  return (
                    <div className="flex items-center space-x-2 my-1">
                      <RadioGroupItem value={data} id={itemId} />
                      <Label htmlFor={itemId} className="font-light">{data}</Label>
                    </div>)
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>

  )
}

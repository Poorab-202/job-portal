import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

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
  return (
    <div>
      <h1 className='text-lg'>Apply Filters</h1>
      <hr className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 border-0 rounded-lg shadow-md mt-3 mb-1" />    
       <RadioGroup>
        {
          filterData.map((filter, index) => (
            <div>
              <h1 className='font-medium'>{filter.filterType}</h1>
              {
                filter.values.map((data, index) => {
                  return (
                    <div className="flex items-center space-x-2 my-1">
                      <RadioGroupItem value={data} />
                      <Label className="font-light">{data}</Label>
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

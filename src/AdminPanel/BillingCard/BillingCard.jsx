import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import '../BillingCard/BillingCard.css';
import { useState } from 'react';

const BillingCard = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='outer-div bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto my-16 '>
      <div className='header'>
        <h3 className='h3-tag text-3xl font-bold text-gray-700 mb-2'>Billing Details</h3>
        <button className='edit-btn px-4 py-2 bg-blue-700 text-white rounded-md'>Edit</button>
      </div>
      <div className='billing-plan'>
        <FormControl>
          <FormLabel
            sx={{ fontWeight: 'bold', color: 'black' }}
            id='demo-radio-buttons-group-label'
          >
            Billing Plan
          </FormLabel>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='female'
            name='radio-buttons-group'
          >
            <FormControlLabel value='Weekly' control={<Radio />} label='Weekly' />
            <FormControlLabel value='Monthly' control={<Radio />} label='Monthly' />
            <FormControlLabel value='Yearly' control={<Radio />} label='Yearly' />
          </RadioGroup>
        </FormControl>
        {/* React-datepicker usage */}
        <DatePicker
          className='custom-datepicker'
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat='MM/dd/yyyy'
          placeholderText='Select Date'
        />

        <TextField sx={{}} id='outlined-basic' label='Email' variant='outlined' />
        <Button sx={{ width: '25px' }} variant='contained'>
          Save
        </Button>
      </div>
    </div>
  );
};

export default BillingCard;
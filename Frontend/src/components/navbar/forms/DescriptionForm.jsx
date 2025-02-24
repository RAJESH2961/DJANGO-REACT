import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function DescriptionForm({label,rows}) {
  return (
    <TextField
          id="outlined-multiline-flexible"
          label={label}
          multiline
          rows={rows}
          sx={{width:'100%'}}
        />
  );
}

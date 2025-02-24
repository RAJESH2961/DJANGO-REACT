import {React, useState, useEffect} from 'react'
import AxiosInstance from './Axios'
import {Box, Typography} from '@mui/material'
import "../App.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from './navbar/forms/TextForm';
import SelectForm from './navbar/forms/Selectform';
import MultiSelectForm from './navbar/forms/MultiSelectForm';
import DescriptionForm from './navbar/forms/DescriptionForm';
import Button from '@mui/material/Button';

const Create = () =>{
    const[country, setCountry] = useState([])
    const[league, setLeague] = useState([])
    const[characteristic, setCharacteristic] = useState([])

    console.log("Country",country)
    console.log("League",league)
    console.log("Characteristic",characteristic)
    const GetData = () =>{
        AxiosInstance.get(`country/`).then((res) =>{
            setCountry(res.data)
    })

    AxiosInstance.get(`league/`).then((res) =>{
        setLeague(res.data)
    })

    AxiosInstance.get(`characteristic/`).then((res) =>{
        setCharacteristic(res.data)
    })
}
useEffect(() =>{
    GetData()
},[])

    return(
        <div>
            <Box className="TopBar">
            <AddBoxIcon/>
            <Typography sx={{marginLeft: '15px', fontWeight:'bold'}} variant='subtitle1'>Create a new club!</Typography>
        </Box>
        <Box className="FormBox">
            <Box className = {'FormArea'}>
                <TextForm label={"club name"}/>
                <Box sx={{marginTop:'30px'}}></Box>
                <TextForm label={"city"}/>
                <Box sx={{marginTop:'30px'}}></Box>
                <SelectForm label={"League"} options={league} />
                <Box sx={{marginTop:'30px'}}>
            <Button variant="contained" fullWidth>Submit the data</Button>
            </Box>
            </Box>





            <Box className={"FormArea"}>
            <SelectForm label={"Country"} options={country} />
            <Box sx={{marginTop:'30px'}}></Box>
            <TextForm label={"Attendance"}/>
            <Box sx={{marginTop:'30px'}}></Box>
            <MultiSelectForm label={"Characteristic"} options={characteristic || []} />

            </Box>
            <Box sx={{marginTop:'30px'}}></Box>





            <Box className = {'FormArea'}>
            <DescriptionForm label={"Description"} rows = {9} />
            </Box>
            <Box sx={{marginTop:'30px'}}></Box>


        </Box>

        </div>
        

    )
}
export default Create
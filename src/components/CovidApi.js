import React, {useState} from 'react'
export default function CovidApi() {
    const [Covid,setCovid]= useState(null)
    React.useEffect(()=>{
        fetch('https://api.covid19api.com/summary')
            .then((response)=>response.json())
            .then((data)=>setCovid(data))
            .catch((error)=>console.log(error))
    })
    let dummy
    if(Covid){
        dummy= <div>
            <ul>
                {Object.values(Covid.Countries).map((value,index) => (
                    <li>
                        {value.Country} {value.NewConfirmed} TotalConfirmed {value.TotalConfirmed}
                    </li>
                ))}
            </ul>
        </div>
    }
    else {
        dummy=''
    }
    return(
        dummy
        // JSON.stringify(Covid.Countries[67])
    )

}
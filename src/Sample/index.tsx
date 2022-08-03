// import React, { useEffect } from 'react';



import { useState } from 'react';
import Datasource from './Datasource';
import Cube from './Cube';


type Props = {

}

// eslint-disable-next-line no-empty-pattern
const View: React.FC<Props> = ({}: Props) => {


    const [value, setValue] = useState('');


    const onButtonClicked = (value: string) => {

        setValue(value)
        console.log(value)
    }


    return (
        <div>
           Sample Component


           <Datasource onButtonClicked={onButtonClicked}  />

           <Cube value={value}  />
        </div>
    )
}

export default  View;
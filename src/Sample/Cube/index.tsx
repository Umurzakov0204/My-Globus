// import React, { useEffect } from 'react';

import { useEffect, useState } from "react"

type Props = {
    value: string
}

const View: React.FC<Props> = ({value}: Props) => {

    const initAttributes: string[] = [];
    const initMeasure: string[] = [];


    const [attributes, setAttributes]  = useState (initAttributes);
    const [measures, setMeasures] = useState(initMeasure);
   


    useEffect (() =>
        {
                console.log(value);
                
            const attr = [];
            attr.push(`${value}_01`)
            attr.push(`${value}_02`)
            attr.push(`${value}_03`)
            attr.push(`${value}_04`)

            setAttributes(attr)

        }, [value] );



    return (
        <div>
           Cube
            <br />
           {value}


           {
            attributes.map( (item, index) => 
            {
                return item;
            })
           }


        </div>
    )
}

export default  View;
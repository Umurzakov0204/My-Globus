// import React, { useEffect } from 'react';

import { Button, TextArea, Text } from "@blueprintjs/core";
import { useState } from "react";

type Props = {

    onButtonClicked(value: string) : void
}

const View: React.FC<Props> = ({onButtonClicked}: Props) => {

    const [value, setValue] = useState('');

    return (
        <div>
           Datasource


           <TextArea style={{height: "100px", width: "200px"}} 
                onChange={(e) =>{ setValue(e.target.value)}} 
            />  
           <Button onClick={() => {onButtonClicked(value)}}  >Pass Parameter</Button>
        </div>
    )
}

export default  View;
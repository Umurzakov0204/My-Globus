
import React, { useEffect } from 'react';
import { DatasourceApi } from '../../shared/mocks/backend';
import { Button } from "@blueprintjs/core";
import TreeExample from "../Tree";





type Props = {

}

const View: React.FC<Props> = ({}: Props) => {



    useEffect (()=> {
        
        // Mockup functionality for retrieving data from the backend
        let datasources = DatasourceApi.getDataSources();
        let cubes = DatasourceApi.getCubes( datasources[0] );
        let views = DatasourceApi.getViews(cubes[0]);

        console.log('==========DATASOURCES ======')
        console.log(datasources);
        console.log('==========CUBES ======')
        console.log(cubes);
        console.log('==========VIEWS ======')
        console.log(views);
    })

    
    return (
        <div>
            Dynamic Layer
            <h2>{}</h2>

            <TreeExample />

        </div>
    )
}

export default  View;
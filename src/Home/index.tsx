// import React, { useEffect } from 'react';
import '../App.css'
// import { DatasourceApi } from '../shared/mocks/backend';
import DynamicLayer from './DynamicLayer';
// import {TreeExample} from "./Tree";

type Props = {

}

const View: React.FC<Props> = ({}: Props) => {

    return (
        <div>
            Home
            <DynamicLayer />
            {/*<TreeExample />*/}
        </div>
    )
}

export default  View;
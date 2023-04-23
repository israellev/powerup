import React from "react";
import {MDBSpinner} from "mdb-react-ui-kit";

interface LoadingTileProps {
    isLoading: boolean;
    children: any;
}

export const LoadingTile = (props: LoadingTileProps) => {
    if (props.isLoading)
        return <MDBSpinner role='status'>
            <span className='visually-hidden'>Loading...</span>
        </MDBSpinner>
    else return props.children
}

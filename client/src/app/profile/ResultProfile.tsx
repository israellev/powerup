import React from "react";
import {useFetch} from "usehooks-ts";
import {LoadingTile} from "../loadingTile/loadingTile";
import {IUserProfile} from "./Profile";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle} from "mdb-react-ui-kit";

interface ResultProfileProps {
    userProfile: IUserProfile;
}

export default function ResultProfile(props: ResultProfileProps) {
    const params = Object.entries(props.userProfile)
        .map(([k, v]) => `${k}=${v}`)
        .join('&');
    const {data} = useFetch<string[]>(`/api/complication?${params}`)
    return (
        <LoadingTile isLoading={!data}>
            <div className='text-center'>
                <h4 className='mb-4'>Please pick one of these suggestions for your profile, or write one your own:</h4>
            </div>
            {data && data.map(result =>
                    <MDBCard className="p1">
                        <MDBCardBody>
                            <MDBCardTitle>{props.userProfile.name}</MDBCardTitle>
                            <MDBCardText style={{textAlign: 'justify'}}>{result}</MDBCardText>
                            <MDBBtn>I like it!</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>)}
        </LoadingTile>
    )
}

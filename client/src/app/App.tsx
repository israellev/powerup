import React from 'react';
import './App.css';
import Profile from "./profile/Profile";
import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

function App() {
    return (
        <div className="App">
            <MDBContainer breakpoint="md">
                <MDBRow>
                    <MDBCol offsetLg={2} md={8} offsetSm={1} sm={10}>
                        <Profile/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default App;

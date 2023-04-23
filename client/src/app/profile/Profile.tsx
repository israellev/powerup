import React, {useState} from 'react';
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';
import ResultProfile from "./ResultProfile";

export interface IUserProfile {
    name: string;
    country: string;
    role: string;
    expertise: string[];
    hobbies: string[];
    additional: string;
}

export default function Profile() {
    const [isFinish, setIsFinish] = useState(false)
    const [userProfile] = useState<Partial<IUserProfile>>({});
    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        const elementId = (e.target as HTMLInputElement).id as keyof IUserProfile
        let value: string | string[] = (e.target as HTMLInputElement).value
        if (["hobbies", "expertise"].includes(elementId))
            value = value?.replace(/ /g, '').split(",")
        // @ts-ignore
        userProfile[elementId] = value
    }
    return (
        <div>
            <div className='p-5 text-center'>
                <h1 className='mb-3'>Power-Up Profile</h1>
            </div>
            {isFinish
                ? <ResultProfile userProfile={userProfile as IUserProfile}/>
                : <div>
                    <div className='p-5 text-center'>
                        <h4 className='mb-3'>Please fill this form for getting standard</h4>
                    </div>
                    <form>
                        <MDBRow className='mb-4'>
                            <MDBCol>
                                <MDBInput id='name' label='Full name' onKeyUp={handleKeyUp} required/>
                            </MDBCol>
                            <MDBCol>
                                <MDBInput id='country' label='Country' onKeyUp={handleKeyUp} required/>
                            </MDBCol>
                        </MDBRow>
                        <MDBInput wrapperClass='mb-4' id='role' label='My cuurent role is' onKeyUp={handleKeyUp} required/>
                        <MDBInput wrapperClass='mb-4' id='expertise' label='My Expertise are' onKeyUp={handleKeyUp} required/>
                        <MDBInput wrapperClass='mb-4' id='hobbies' label='My hobbies are' onKeyUp={handleKeyUp} required/>
                        <MDBInput wrapperClass='mb-4' type="textarea" id='additional' onKeyUp={handleKeyUp} required
                                  label='Little interesting info About me'/>
                        <MDBBtn className='mb-4' type='submit' block onClick={() => setIsFinish(true)}>
                            Send
                        </MDBBtn>
                    </form>
                </div>}
        </div>
    );
}

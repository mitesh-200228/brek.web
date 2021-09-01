/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {useHistory} from 'react-router-dom';

const Another = () => {

    const history = useHistory();

    const callAboutPage = async () => {
        try {
            const res = await fetch('/another',{
                method:'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials:"include"
            });
            console.log("214124");
            const data = await res.json();
            console.log("12");
            console.log(data);

            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }catch(err) {
            console.log(err);
            history.push('/');
        }
    };

    React.useEffect(() => {
        callAboutPage();
    },[]);

    return (
        <div>
            <form method="GET">
                this is another page
            </form>
        </div>
    )
}

export default Another

import React from 'react'
import { useHistory } from 'react-router-dom';

const SignUpPage = () => {

    const [user, setUser] = React.useState({
        FirstName: "", LastName: "", email: "", phone: "", username: "", password: "", confirmPassword: ""
    });
    const history = useHistory();
    let name, value;

    const handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { FirstName, LastName, email, phone, username, password, confirmPassword } = user;

        const res = await fetch("/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                FirstName, LastName, email, phone, username, password, confirmPassword
            })
        });

        const y = await res.json();
        console.log(y);
        if(y.status === 422 || !y){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration Successful");
            history.push("/signin");
        }
    }

    return (
        <div>
            <form method="POST">
                <input name="email" type="email" onChange={handleInput} value={user.email} placeholder="Enter your email"></input>
                <br />
                <input name="password" type="password" onChange={handleInput} value={user.password} placeholder="Enter your password"></input>
                <br />
                <input name="FirstName" type="text" onChange={handleInput} value={user.FirstName} placeholder="FirstName" />
                <br />
                <input name="LastName" type="text" onChange={handleInput} value={user.LastName} placeholder="LastName" />
                <br />
                <input name="username" type="text" onChange={handleInput} value={user.username} placeholder="username" />
                <br />
                <input name="confirmPassword" type="password" onChange={handleInput} value={user.confirmPassword} placeholder="confirmPassword" />
                <br />
                <input name="phone" type="number" onChange={handleInput} value={user.phone} placeholder="Phone" />
                <br />
                <button type="submit" onClick={PostData} >SignUp</button>
            </form>
        </div>
    )
}

export default SignUpPage

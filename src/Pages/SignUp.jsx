import { useState } from "react";

const SignUp = () => {
    const [show, setShow] = useState(false);
    console.log(show);

    const fetchHandler = (event) => {
        event.preventDefault();

    }
    return (
        <div className="flex justify-center">
            <form className="flex flex-col mt-30 w-95" onSubmit={fetchHandler}>
                {!show ? <p className="ml-35 mb-2 font-sans font-bold text-2xl">Login</p> : <p className="ml-35 mb-2 font-sans font-bold text-2xl">Sign Up</p>}
                {!show ? null : <input className="mt-2 p-3 border-2 rounded-2xl bg-gray-200 font-sans font-normal" name="username" type="text" placeholder="Name" />}
                <input className="mt-2 p-3 border-2 rounded-2xl bg-gray-200 font-sans font-normal" name="email" type="email" placeholder="Email" />
                <input className="mt-2 p-3 border-2 rounded-2xl bg-gray-200 font-sans font-normal" name="password" type="password" placeholder="Password" />
                {!show ? <button className="mt-2 p-3 border-2 rounded-2xl bg-black font-sans font-normal  text-white" type="button">Log in</button> : <button className="mt-2 p-3 border-2 rounded-2xl bg-blue-400 font-sans font-normal  text-white" type="submit">Sign Up</button>}
                {!show ? <p className="ml-30 mt-4 font-medium font-san">Forgot Password?
                    <span className="cursor-pointer  text-blue-600 hover:text-red-600 ml-2"
                        onClick={() => { setShow(!show) }}>Sign Up</span></p> :
                    <p className="m-4">Already have an account ? <span className="cursor-pointer text-red-600 hover:text-blue-800"
                        onClick={() => { setShow(!show) }}>Log in</span></p>}
            </form>
        </div>
    )
}

export default SignUp;

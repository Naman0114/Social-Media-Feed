import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-evenly">
                <div>
                    <img src="thread.webp" className="size-75 mt-32" alt="thread-logo" />
                </div>
                <form className="flex flex-col mt-30 w-95">
                    <p className="ml-35 mb-2 font-sans font-bold text-2xl">Sign Up</p>
                    <input className="mt-2 p-3 border-2 rounded-2xl bg-gray-200 font-sans font-normal" name="username" type="text" placeholder="Name" />
                    <input className="mt-2 p-3 border-2 rounded-2xl bg-gray-200 font-sans font-normal" name="email" type="email" placeholder="Email" />
                    <input className="mt-2 p-3 border-2 rounded-2xl bg-gray-200 font-sans font-normal" name="password" type="password" placeholder="Password" />
                    <button className="mt-2 p-3 border-2 rounded-2xl bg-blue-400 font-sans font-normal  text-white" type="submit">Sign Up</button>
                    <p className="m-4">Already have an account ?
                        <span className="cursor-pointer m-2 text-red-600 hover:text-blue-800"
                            onClick={() => { navigate('/login') }}>Log in</span></p>
                </form>

            </div>
        </>
    )
}
export default SignUp;

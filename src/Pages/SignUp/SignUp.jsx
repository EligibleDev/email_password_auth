import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignUp = () => {
    const [signUpError, setSignUpError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setshowPassword] = useState(false);

    const handleSignUp = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;

        setSignUpError("");
        setSuccess("");

        if (password.length >= 8) {
            setSignUpError("");
        } else {
            return setSignUpError("password has to be at least 8 characters");
        }

        if (!terms) {
            return setSignUpError("you have to accept our terms and policy");
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user);
                setSuccess("sign up successful");
            })
            .catch((error) => {
                console.error(error.message);
                setSignUpError(error.message);
            });
    };

    return (
        <div className=" flex w-full py-20 items-center justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <form onSubmit={handleSignUp} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input type="text" name="name" size="lg" label="Name" />
                        <Input type="email" name="email" size="lg" label="Email" />
                        <Input
                            id="password-field"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            size="lg"
                            label="Password"
                        />
                        <button onClick={() => setshowPassword(!showPassword)}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>
                    <Checkbox
                        name="terms"
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />

                    {signUpError && <p className="text-red-500">{signUpError}</p>}
                    {success && <p className="text-green-500">{success}</p>}

                    <Button className="mt-6" fullWidth>
                        <Input className="outline-0 border-none " type="submit" value="Sign Up" />
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="/login" className="font-medium text-gray-900">
                            <b>Login</b>
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default SignUp;

import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            console.log(res.user)
        })
        .catch(error => console.error(error.code, error.message));
};

const Login = () => {
    return (
        <div className=" flex w-full py-20 items-center justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Login
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to login.
                </Typography>
                <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input required name="email" type="email" size="lg" label="Email" />
                        <Input
                            required
                            name="password"
                            type="password"
                            size="lg"
                            label="Password"
                        />
                    </div>
                    <Checkbox
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
                    <Button className="mt-6" fullWidth>
                        <Input value="Login" type="submit" />
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="/sign-up" className="font-medium text-gray-900">
                            <b>Sign UP</b>
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Login;

import { Link } from "react-router-dom";

import FormControl from "../../components/atoms/FormControl";
import Label from "../../components/atoms/Label";
import AuthHeading from "../../components/molecules/AuthHeading";
import Button from "../../components/atoms/Button";
import FormGroup from "../../components/atoms/FormGroup";

export default function Login() {
  return (
    <>
      <AuthHeading
        title="Login to Account"
        description="Please enter your email and password to continue"
      />
      <form>
        <FormGroup className="mb-3 md:mb-4">
          <Label htmlFor="email">Email address</Label>
          <FormControl type="email" id="email" placeholder="example123@gmail.com"/>
        </FormGroup>
        <FormGroup className="mb-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link to="/forgot-password" className="underline text-[var(--blue-200)]">
              Forgot Password?
            </Link>
          </div>
          <FormControl type="password" id="password"/>
        </FormGroup>
        <div className="flex items-center gap-2 mb-4 md:mb-8 lg:mb-4 xl:mb-8">
          <input type="checkbox" name="remember_token" id="remember_token" 
            className="w-5 h-5"/>
          <label htmlFor="remember_token" className="dark:text-gray-400">Remember Password</label>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col basis-[80%]">
            <Button el="button">Sign In</Button>
          </div>
        </div>
        <p className="text-center mt-3 dark:text-gray-400">Don't have an account? <Link to="/register" className="underline text-[var(--blue-200)]">Create Account</Link></p>
      </form>
    </>
  );
}
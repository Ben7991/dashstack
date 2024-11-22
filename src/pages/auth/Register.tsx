import { Link } from "react-router-dom";

import FormControl from "../../components/atoms/FormControl";
import Label from "../../components/atoms/Label";
import AuthHeading from "../../components/molecules/AuthHeading";
import Button from "../../components/atoms/Button";
import FormGroup from "../../components/atoms/FormGroup";

export default function Register() {
  return (
    <>
      <AuthHeading
        title="Create an Account"
        description="Provide details below to continue"
      />
      <form>
        <FormGroup className="mb-3 md:mb-4">
          <Label htmlFor="name">Name</Label>
          <FormControl type="text" id="name" placeholder="example123@gmail.com"/>
        </FormGroup>
        <FormGroup className="mb-3 md:mb-4">
          <Label htmlFor="email">Email address</Label>
          <FormControl type="email" id="email" placeholder="example123@gmail.com"/>
        </FormGroup>
        <FormGroup className="mb-8 lg:mb-4 xl:mb-8">
          <Label htmlFor="password">Password</Label>
          <FormControl type="password" id="password"/>
        </FormGroup>
        <div className="flex items-center justify-center">
          <div className="flex flex-col basis-[80%]">
            <Button>Sign Up</Button>
          </div>
        </div>
        <p className="text-center mt-3">Already have an account? <Link to="/" className="underline text-[var(--blue-200)]">Login</Link></p>
      </form>
    </>
  );
}
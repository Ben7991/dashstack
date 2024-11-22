import { Link } from "react-router-dom";

import FormControl from "../../components/atoms/FormControl";
import Label from "../../components/atoms/Label";
import AuthHeading from "../../components/molecules/AuthHeading";
import Button from "../../components/atoms/Button";
import FormGroup from "../../components/atoms/FormGroup";

export default function ForgotPassword() {
  return (
    <>
      <AuthHeading
        title="Forgot Password"
        description="Provide email to request password reset"
      />
      <form>
        <FormGroup className="mb-4 md:mb-6">
          <Label htmlFor="email">Email address</Label>
          <FormControl type="email" id="email" placeholder="example123@gmail.com"/>
        </FormGroup>
        <div className="flex items-center justify-center">
          <div className="flex flex-col basis-[80%]">
            <Button>Submit</Button>
          </div>
        </div>
        <p className="text-center mt-3">Already have an account? <Link to="/" className="underline text-[var(--blue-200)]">Login</Link></p>
      </form>
    </>
  );
}
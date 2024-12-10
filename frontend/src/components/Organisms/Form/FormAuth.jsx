import { Form, Link } from "react-router-dom";
import FormInput from "@components/Atoms/Form/FormInput";

// Icon
import { Profile, Lock, Message } from "@components/Icon/Icon";

const FormAuth = ({ isRegister }) => {
  return (
    <div className="mt-[60px]">
      <Form method="POST">
        <FormInput
          icon={<Profile colorStroke={"#6e7079"} />}
          type="text"
          name="username"
          placeholder="Username"
        />

        {isRegister && (
          <FormInput
            icon={<Message colorStroke={"#6e7079"} />}
            type="email"
            name="email"
            placeholder="Email"
          />
        )}

        <FormInput
          icon={<Lock colorStroke={"#6e7079"} />}
          type="password"
          name="password"
          placeholder="Password"
        />

        {!isRegister && (
          <p className="mt-3 text-right text-sm text-primary_100">
            Forgot Password
          </p>
        )}

        <div className="text-center mt-12">
          {isRegister ? (
            <p className="text-night_30 text-sm">
              Already have an account?
              <Link to="/login" className="text-primary_100 ml-1">
                Login
              </Link>
            </p>
          ) : (
            <p className="text-night_30 text-sm">
              Don&apos;t have an account?
              <Link to="/signup" className="text-primary_100 ml-1">
                Sign Up
              </Link>
            </p>
          )}

          <button
            type="submit"
            className="mt-12 bg-primary_100 text-white rounded-lg px-10 py-[17px]"
          >
            {isRegister ? "Sign Up" : "Login"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default FormAuth;

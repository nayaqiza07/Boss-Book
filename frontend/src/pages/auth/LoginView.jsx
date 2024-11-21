import { Logo } from "../../assets/Icon/Logo";
import { Card } from "../../components/Card/Card";
import { Profile, Lock } from "../../components/Icon/Icon";

const LoginView = () => {
  return (
    <div className="bg-main_background h-screen flex justify-center items-center">
      <div className="w-full lg:w-1/4">
        <Card>
          <div className="px-[19px] py-[33px] h-screen lg:h-fit flex flex-col justify-center">
            <div className="flex flex-col items-center">
              <Logo />
              <h1 className="text-lg font-medium mt-[30px]">Welcome back!</h1>
              <h2 className="text-night_30 text-sm">Login to your account</h2>
            </div>

            {/* <form> */}
            <div className="mt-[60px]">
              <div className="flex items-center px-4 gap-3 mt-7 rounded-lg bg-[#EFF1F9]/60">
                <Profile colorStroke={"#6e7079"} />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full py-[16.5px] focus:outline-none bg-transparent text-[#ABAFB1] transition-colors"
                />
              </div>
              <div className="flex items-center px-4 gap-3 mt-7 rounded-lg bg-[#EFF1F9]/60">
                <Lock colorStroke={"#6e7079"} />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-[16.5px] focus:outline-none bg-transparent text-[#ABAFB1]  transition-colors"
                />
              </div>
              <p className="mt-3 text-right text-sm text-primary_100">
                Forgot Password
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="text-night_30 text-sm">
                Don&apos;t have an account?
                <span className="text-primary_100"> Sign Up</span>
              </p>
              <button className="mt-12 bg-primary_100 text-white rounded-lg px-10 py-[17px]">
                Login
              </button>
            </div>
            {/* </form> */}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginView;

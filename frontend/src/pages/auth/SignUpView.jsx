import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customAPI from "../../api/axios";
import { Logo } from "../../assets/Icon/Logo";
import { Card } from "../../components/Card/Card";
import FormAuth from "../../components/Form/FormAuth";
import { signUpUser } from "../../features/userSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formInputData = await request.formData();
    const data = Object.fromEntries(formInputData);
    // console.log(data);

    try {
      const response = await customAPI.post("/auth/register", data);
      store.dispatch(signUpUser(response.data));
      toast.success("Sign Up Berhasil");
      return redirect("/login");
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
      return null;
    }
  };

const SignUpView = () => {
  return (
    <div className="bg-main_background h-screen flex justify-center items-center">
      <div className="w-full lg:w-1/4">
        <Card>
          <div className="px-[19px] py-[33px] h-screen lg:h-fit flex flex-col justify-center">
            <div className="flex flex-col items-center">
              <Logo />
              <h1 className="text-lg font-medium mt-[30px]">
                Get Started With
                <span className="text-primary_100"> BossBook</span>
              </h1>
              <h2 className="text-night_30 text-sm">Create your account</h2>
            </div>

            <div>
              <FormAuth isRegister={true} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUpView;

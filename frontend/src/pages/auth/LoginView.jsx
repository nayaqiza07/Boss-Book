import { Logo } from "../../assets/Icon/Logo";
import { Card } from "../../components/Card/Card";
import FormAuth from "../../components/Form/FormAuth";
import { redirect } from "react-router-dom";
import { loginUser } from "../../features/userSclice";
import customAPI from "../../api/axios";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const formInputData = await request.formData();
    const data = Object.fromEntries(formInputData);

    try {
      const response = await customAPI.post("/auth/login", data);
      store.dispatch(loginUser(response.data));
      toast.success("Login Berhasil");
      return redirect("/");
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
      return null;
    }
  };

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

            <div>
              <FormAuth />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginView;

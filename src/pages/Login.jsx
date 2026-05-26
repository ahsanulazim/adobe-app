import UserForm from "../components/UserForm";

const Login = () => {
  return (
    <div className="min-h-[calc(100dvh-65px)] flex items-center justify-center">
      <UserForm isLogin={true} />
    </div>
  );
};

export default Login;

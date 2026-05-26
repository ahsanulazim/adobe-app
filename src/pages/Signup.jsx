import UserForm from "../components/UserForm";

const Signup = () => {
  return (
    <div className="min-h-[calc(100dvh-65px)] flex items-center justify-center">
      <UserForm isLogin={false} />
    </div>
  );
};

export default Signup;

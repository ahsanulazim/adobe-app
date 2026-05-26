import { useForm } from "react-hook-form";

const ShippingForm = ({ ref }) => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      thana: "",
      district: "",
      comment: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)} className="fieldset">
      <div className="flex justify-baseline items-center gap-5">
        <div className="fieldset flex-1">
          <label htmlFor="firstName" className="label">
            First Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="input w-full"
            {...register("firstName", { required: "First Name is Required" })}
          />
          {errors.firstName && (
            <p className="text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div className="fieldset flex-1">
          <label htmlFor="lastName" className="label">
            Last Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="input w-full"
            {...register("lastName", { required: "Last Name is Required" })}
          />
          {errors.lastName && (
            <p className="text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      <div className="flex justify-baseline items-center gap-5">
        <div className="fieldset flex-1">
          <label htmlFor="phone" className="label">
            Phone<span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            className="input w-full"
            {...register("phone", { required: "Phone Number is Required" })}
          />
          {errors.phone && (
            <p className="text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div className="fieldset flex-1">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            className="input w-full"
            {...register("email", {
              required: false,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>
      <label htmlFor="comment" className="label">
        Comment
      </label>
      <textarea
        className="textarea w-full"
        rows={5}
        {...register("comment", { required: false })}
      ></textarea>
    </form>
  );
};

export default ShippingForm;

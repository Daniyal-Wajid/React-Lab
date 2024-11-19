import { useForm } from "react-hook-form";
import Nav from "../../components/Nav/Nav";

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg mt-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-control">
            <label htmlFor="firstName" className="text-sm font-semibold text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", {
                required: "First name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "First name must contain only letters",
                },
              })}
              className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && (
              <div className="text-red-500 text-sm">
                Error: {errors.firstName?.message}
              </div>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="secondName" className="text-sm font-semibold text-gray-700 mb-2">
              Second Name
            </label>
            <input
              type="text"
              id="secondName"
              {...register("secondName", {
                required: "Second name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Second name must contain only letters",
                },
              })}
              className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.secondName && (
              <div className="text-red-500 text-sm">
                Error: {errors.secondName?.message}
              </div>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="userName" className="text-sm font-semibold text-gray-700 mb-2">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              {...register("userName", {
                required: "User name is required",
                pattern: {
                  value: /^[A-Za-z0-9._-]+$/,
                  message: "User name can contain letters, numbers, and special characters (_ . -)",
                },
              })}
              className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.userName && (
              <div className="text-red-500 text-sm">
                Error: {errors.userName?.message}
              </div>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format (xxxxxx@domain.xx)",
                },
              })}
              className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <div className="text-red-500 text-sm">
                Error: {errors.email?.message}
              </div>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/,
                  message: "Password must contain at least one letter, one number, and one special character",
                },
              })}
              className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <div className="text-red-500 text-sm">
                Error: {errors.password?.message}
              </div>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+92\d{9}$/,
                  message: "Phone number must be in the format +92XXXXXXXXX",
                },
              })}
              className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && (
              <div className="text-red-500 text-sm">
                Error: {errors.phone?.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>

          {isSubmitSuccessful && (
            <div className="text-green-500 text-sm text-center mt-4">Success</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

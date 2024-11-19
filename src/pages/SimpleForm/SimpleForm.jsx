import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';

const SimpleForm = () => {
  const [auth, setAuth] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAuth({ ...auth, [name]: value });
  };

  const validateForm = () => {
    const formErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

    if (!auth.email) formErrors.email = 'Email is required';
    else if (!emailRegex.exec(auth.email)) formErrors.email = 'Invalid email';

    if (!auth.password) formErrors.password = 'Password is required';
    else if (!passwordPattern.exec(auth.password)) formErrors.password = 'Password must include a letter, a number, and a special character';

    setErrors(formErrors);
    return !formErrors.email && !formErrors.password;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setAuth({ email: '', password: '' });
      setErrors({});
      setIsSuccess(true);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Nav />
      
      <div className="flex flex-col justify-center items-center flex-1 p-4">
        <div className="w-full sm:w-96 p-8 bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                value={auth.email}
                onChange={handleInputChange}
                className="mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={auth.password}
                onChange={handleInputChange}
                className="mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>

          {isSuccess && <p className="text-green-500 text-sm mt-4 text-center">Successful</p>}
        </div>
      </div>
    </div>
  );
};

export default SimpleForm;

//Hello,This is the change i made
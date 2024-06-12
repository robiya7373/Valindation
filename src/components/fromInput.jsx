// src/components/RegistrationForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const fromInput = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data Submitted:', data);
    };

    return (
        <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold mb-4 text-center">Registration Form</h2>
            <p className="text-center mb-6">Fill out the form carefully for registration</p>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Student Name</label>
                <div className="flex space-x-2">
                    <input
                        type="text"
                        {...register('firstName', { required: 'First name is required' })}
                        placeholder="First Name"
                        className="w-1/3 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        {...register('middleName')}
                        placeholder="Middle Name"
                        className="w-1/3 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        {...register('lastName', { required: 'Last name is required' })}
                        placeholder="Last Name"
                        className="w-1/3 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="text-red-600">
                    {errors.firstName && <span>{errors.firstName.message}</span>}
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Birth Date</label>
                <div className="flex space-x-2">
                    <select {...register('month', { required: 'Month is required' })} className="w-1/3 p-2 border border-gray-300 rounded">
                        <option value="">Month</option>
                        {/* Add other month options */}
                    </select>
                    <select {...register('day', { required: 'Day is required' })} className="w-1/3 p-2 border border-gray-300 rounded">
                        <option value="">Day</option>
                       
                    </select>
                    <select {...register('year', { required: 'Year is required' })} className="w-1/3 p-2 border border-gray-300 rounded">
                        <option value="">Year</option>
                     
                    </select>
                </div>
                <div className="text-red-600">
                    {errors.month && <span>{errors.month.message}</span>}
                    {errors.day && <span>{errors.day.message}</span>}
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Gender</label>
                <select {...register('gender', { required: 'Gender is required' })} className="w-full p-2 border border-gray-300 rounded">
                    <option value="">Please Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <div className="text-red-600">
                    {errors.gender && <span>{errors.gender.message}</span>}
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Address</label>
                <input
                    type="text"
                    {...register('streetAddress', { required: 'Street address is required' })}
                    placeholder="Street Address"
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <input
                    type="text"
                    {...register('streetAddress2')}
                    placeholder="Street Address Line 2"
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <input
                    type="text"
                    {...register('city', { required: 'City is required' })}
                    placeholder="City"
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <input
                    type="text"
                    {...register('state', { required: 'State is required' })}
                    placeholder="State / Province"
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <input
                    type="text"
                    {...register('zipCode', { required: 'Postal code is required' })}
                    placeholder="Postal / Zip Code"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <div className="text-red-600">
                    {errors.streetAddress && <span>{errors.streetAddress.message}</span>}
                    {errors.city && <span>{errors.city.message}</span>}
                    {errors.state && <span>{errors.state.message}</span>}
                    {errors.zipCode && <span>{errors.zipCode.message}</span>}
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Student E-mail</label>
                <input
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email address'
                        }
                    })}
                    placeholder="example@example.com"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <div className="text-red-600">
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Mobile Number</label>
                <input
                    type="tel"
                    {...register('mobileNumber', {
                        required: 'Mobile number is required',
                        pattern: {
                            value: /^\(\d{3}\) \d{3}-\d{4}$/,
                            message: 'Invalid mobile number format'
                        }
                    })}
                    placeholder="(000) 000-0000"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <div className="text-red-600">
                    {errors.mobileNumber && <span>{errors.mobileNumber.message}</span>}
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Phone Number</label>
                <input
                    type="tel"
                    {...register('phoneNumber', {
                        pattern: {
                            value: /^\(\d{3}\) \d{3}-\d{4}$/,
                            message: 'Invalid phone number format'
                        }
                    })}
                    placeholder="(000) 000-0000"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <div className="text-red-600">
                    {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Work Number</label>
                <input
                    type="tel"
                    {...register('workNumber', {
                        pattern: {
                            value: /^\(\d{3}\) \d{3}-\d{4}$/,
                            message: 'Invalid work number format'
                        }
                    })}
                    placeholder="(000) 000-0000"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <div className="text-red-600">
                    {errors.workNumber && <span>{errors.workNumber.message}</span>}
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Company</label>
                <input
                    type="text"
                    {...register('company')}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Courses</label>
                <select {...register('course', { required: 'Course is required' })} className="w-full p-2 border border-gray-300 rounded">
                    <option value="">Please Select</option>
                  
                </select>
                <div className="text-red-600">
                    {errors.course && <span>{errors.course.message}</span>}
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Additional Comments</label>
                <textarea
                    {...register('comments')}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
        </form>
    );
};

export default fromInput;

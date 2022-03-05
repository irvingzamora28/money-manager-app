import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { login, reset } from "../features/auth/authSlice";
import { TailSpin } from "react-loader-spinner";

const Login = () => {
	const navivate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		remember: false,
	});

	const { email, password, remember } = formData;

	const { user, isLoading, isError, isSuccess, error, success } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		if (isError) {
			toast.error(error.message);
		}
		if (isSuccess || user) {
			navivate("/");
			toast.success(success.message);
		}
		dispatch(reset());
	}, [user, isError, isSuccess, error, success, navivate, dispatch]);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const onChangeRemember = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.checked,
		}));
	};

	const onSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		const userData = { email, password };
		dispatch(login(userData));
	};

	if (isLoading) {
		return (
			<>
				<section className="h-screen">
					<div className="flex justify-center items-center align-middle h-3/4">
						<TailSpin color="#00BFFF" height={80} width={80} />
					</div>
				</section>
			</>
		);
	}

	return (
		<>
			<section className="h-screen">
				<div className="container px-6 py-12 h-full">
					<div className="flex justify-center items-center flex-wrap g-6 text-gray-800">
						<div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
							<img
								src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
								className="w-full"
								alt="Login"
							/>
						</div>
						<div className="w-full text-center py-6">
							<p className="text-2xl tracking-wide text-zinc-700 uppercase">Sign in</p>
						</div>
						<div className="md:w-8/12 lg:w-5/12">
							<form onSubmit={onSubmit}>
								<div className="mb-6">
									<input
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={onChange}
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										placeholder="Email address"
									/>
								</div>

								<div className="mb-6">
									<input
										type="password"
										name="password"
										id="password"
										value={password}
										onChange={onChange}
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										placeholder="Password"
									/>
								</div>

								<div className="flex justify-between items-center mb-6">
									<div className="form-group form-check">
										<input
											type="checkbox"
											id="remember"
											name="remember"
											onChange={onChangeRemember}
											className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
											checked={remember}
										/>
										<label
											className="form-check-label inline-block text-gray-800"
											htmlFor="exampleCheck2"
										>
											Remember me
										</label>
									</div>
									<a
										href="#!"
										className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
									>
										Forgot password?
									</a>
								</div>

								<button
									type="submit"
									className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
									data-mdb-ripple="true"
									data-mdb-ripple-color="light"
								>
									Sign in
								</button>

								<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
									<p className="text-center font-semibold mx-4 mb-0">OR</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;

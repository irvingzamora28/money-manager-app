import { UserModelInterface } from '../interfaces/UserInterface';
import { UserServiceResponse, UserServiceType } from '../types';
import UsernameGenerator from '../utils/usernameGenerator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserService = (user: UserModelInterface): UserServiceType => {
	const register = async (name: string, email: string, password: string): Promise<UserServiceResponse> => {
		const userExists = await user.findOne({ email });
		if (userExists) {
			return { error: { errorCode: 99, message: 'User already exists' } };
		}
		// Hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const username = UsernameGenerator().generate();

		const result = await user.create({
			name,
			email,
			password: hashedPassword,
			username
		});

		if (result) {
			return { user: result };
		} else {
			return { error: { errorCode: 99, message: 'Invalid user data' } };
		}
	};

	const login = async (email: string, password: string): Promise<UserServiceResponse> => {
		const result = await user.findOne({ email });
		if (result && (await bcrypt.compare(password, result.password))) {
			return { user: result };
		} else {
			return { error: { errorCode: 99, message: 'Login not allowed' } };
		}
	};

	const generateToken = (id: string) => {
		const secret = process.env.JWT_SECRET ?? "";
		return jwt.sign({ id }, secret, { expiresIn: "30d" });
	};

	return {
		register,
		login
	};
};

export default UserService;

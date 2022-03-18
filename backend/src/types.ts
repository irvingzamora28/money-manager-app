import { NextFunction, Response } from 'express';
import { CategoryInterface } from './interfaces/CategoryInterface';
import { ExpenseInterface } from './interfaces/ExpenseInterface';
import { UserInterface } from './interfaces/UserInterface';
import { AuthRequest } from './middleware/authMiddleware';

export type DatabaseErrorType = { errorCode: number; message: string };
export type ErrorType = { errorCode: number; message: string };

export type ControllerType = {
	index: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response>;
	create: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response>;
	get: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response>;
	update: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response>;
	destroy: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response>;
};

export type AuthenticationControllerType = {
	register: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response>;
	login: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response>;
	get: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response>;
};

export type ExpenseServiceResponse = { expenses?: ExpenseInterface[]; error?: ErrorType };
export type ExpenseServiceType = {
	all: (userId: string) => Promise<ExpenseServiceResponse>;
	get: (id: string) => Promise<ExpenseServiceResponse>;
	insert: (name: string, price: number, description: string, user: string) => Promise<ExpenseServiceResponse>;
	update: (id: string, data: object) => Promise<ExpenseServiceResponse>;
	destroy: (id: string) => Promise<ExpenseServiceResponse>;
};

export type UserServiceResponse = { user?: UserInterface; error?: ErrorType };
export type UserServiceType = {
	register: (name: string, email: string, password: string) => Promise<UserServiceResponse>;
	login: (email: string, password: string) => Promise<UserServiceResponse>;
};

export type CategoryServiceResponse = { categories?: CategoryInterface[]; error?: ErrorType };
export type CategoryServiceType = {
	all: (userId: string) => Promise<CategoryServiceResponse>;
	get: (id: string) => Promise<CategoryServiceResponse>;
	insert: (name: string, icon: string, user: string) => Promise<CategoryServiceResponse>;
	update: (id: string, data: object) => Promise<CategoryServiceResponse>;
	destroy: (id: string) => Promise<CategoryServiceResponse>;
};

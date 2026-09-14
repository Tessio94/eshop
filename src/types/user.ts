export type User = {
	id: number;
	email: string;
	username: string;
	password: string;
	name: {
		firstname: string;
		lastname: string;
	};
	address: {
		city: string;
		street: string;
		number: number;
		zipcode: string;
		geolocation: {
			lat: string;
			long: string;
		};
	};
	phone: string;
};

export type CreateUserRequest = {
	email: string;
	username: string;
	password: string;
};

export type UpdateUserRequest = {
	id: number;
	email: string;
	username: string;
};

export type LoginRequest = {
	username: string;
	password: string;
};

export type LoginResponse = {
	token: string;
};

export type Person = {
  id: number;
  fullName: string;
  email: string;
  cityId: number;
};

export type CreatePerson = {
  fullName: string;
  email: string;
  cityId: number;
};

export type City = {
  id: number;
  name: string;
};

export type CreateCity = {
  name: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type CreateUser = {
  name: string;
  email: string;
  password: string;
};

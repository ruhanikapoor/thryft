export interface AuthCredentials {
  id: string,
  email: string;
  password: string;
}

export interface SignUpCredentials extends AuthCredentials {
  name: string;
}
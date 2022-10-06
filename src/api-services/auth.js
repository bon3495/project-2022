import { request } from '~/utils/request';
import { PathName } from './api-pathname';

export const register = data => request.post(PathName.Signup, data);

export const signIn = data => request.post(PathName.SignIn, data);

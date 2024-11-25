import { NextRequest } from 'next/server';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setToken = async (token: string, request?: NextRequest) => {
    const date = new Date();
    date.setDate(date.getDate() + 15);

    if(request) {
        await request.cookies.set('AUTH_TOKEN', token);
    }else {
        await cookies.set('AUTH_TOKEN', token, {expires: date});
    }
}

export const getToken = async (request?: NextRequest) => {
    if(request) {
        return request.cookies.get('AUTH_TOKEN')?.value
    }
    return  cookies.get('AUTH_TOKEN');
}

export const removeToken = (request?: NextRequest) => {
    if(request) {
        request.cookies.delete('AUTH_TOKEN')
    } else{
        cookies.remove('AUTH_TOKEN')
    }
}
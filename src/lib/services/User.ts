import {Cookies} from 'react-cookie';
import Router from 'next/router';

import base from '@src/lib/services/Api';
import {setCookie, removeCookie} from '@src/lib/utils/Cookies';

const cookies = new Cookies();

export const login = (email: string, password: string) => {
  base()
    .post('/partner/token/', {email, password})
    .then(res => {
      setCookie('authtoken', res.data.access);
      setCookie('refreshtoken', res.data.refresh);
      Router.push('/dashboard');
    })
    .catch(err => {
      if (!err.response || err.response.status !== 401) {
        alert('문제가 발생했습니다. 다시 시도해주세요.');
        return;
      }
      alert('ID/비밀번호가 잘못 입력되었습니다.');
    });
};

export const logout = () => {
  removeCookie('authtoken');
  removeCookie('refreshtoken');
  Router.push('/login');
};

export const refresh = () => {
  base()
    .post('/partner/token/refresh/', {refresh: cookies.get('refreshtoken')})
    .then(res => {
      setCookie('authtoken', res.data.access);
      setCookie('refreshtoken', res.data.refresh);
    });
};
const UserService = {
  login,
  logout,
  refresh,
};

export default UserService;

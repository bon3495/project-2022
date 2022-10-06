import Cookies from 'universal-cookie';
import addMonths from 'date-fns/addMonths';
import { CookieKey } from '~/constants/common-values';
import { getCurrentDomain } from './common';

let cookies = new Cookies();

const CookiesStorage = {
  domain: getCurrentDomain(),

  getCookieData(key) {
    return cookies.get(key);
  },

  setCookieData(key, data, path) {
    const expires = addMonths(new Date(), 1);
    return cookies.set(key, data, {
      domain: this.domain,
      expires,
      path: path || '/',
    });
  },

  clearCookieData(key, path) {
    return cookies.remove(key, { domain: this.domain, path: path || '/' });
  },

  getAccessToken() {
    return cookies.get(CookieKey.AccessToken);
  },

  isAuthenticated() {
    const accessToken = cookies.get(CookieKey.AccessToken);
    return !!accessToken;
  },

  clearSession() {
    this.clearCookieData(CookieKey.AccessToken);
    this.clearCookieData(CookieKey.UserInfo);
  },
};

export default CookiesStorage;

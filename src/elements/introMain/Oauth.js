export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KEY_KAKAO}&redirect_uri=${process.env.REACT_APP_URI_KAKAO}&response_type=code`;
// export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&access_type=offline&redirect_uri=${process.env.REACT_APP_REDIRECT_URI_G}&response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY_G}`;
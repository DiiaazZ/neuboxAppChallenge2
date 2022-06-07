// export const url_api = 'http://localhost:8000';
export const api_config = {
    url: 'http://localhost:8000',

    get_user: '/api/user/',
    get_user_comments: '/api/user/comments',

    post_login: '/api/login',
    post_logout: '/api/logout',
    post_register: '/api/register',

    comments: {
        get: '/api/comments',
        post: '/api/comments'
    },
    comments_id: {
        get: '/api/comments/',
        put: '/api/comments/',
        delete: '/api/comments/'
    }
};
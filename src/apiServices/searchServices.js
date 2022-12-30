import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.getSearchAccount(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

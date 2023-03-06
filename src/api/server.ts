// TODO: Add token, revise server calls?, fix link
const token = '94d41fb2a1a6a1cebc3df4d7ffb400863944b812d3f82c37'


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://woozy-whiskey-shelf.glitch.me/api/shelf`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer 94d41fb2a1a6a1cebc3df4d7ffb400863944b812d3f82c37',
                }
            });

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server');
        }

        return await response.json();
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://woozy-whiskey-shelf.glitch.me/api/shelf`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer 94d41fb2a1a6a1cebc3df4d7ffb400863944b812d3f82c37'
                },
                body: JSON.stringify(data)
            });

        if (!response.ok) {
            throw new Error('Failed to create new data on the server');
        }

        return await response.json();
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://woozy-whiskey-shelf.glitch.me/api/shelf/${id}`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer 94d41fb2a1a6a1cebc3df4d7ffb400863944b812d3f82c37'
                },
                body: JSON.stringify(data)
            });

        if (!response.ok) {
            throw new Error('Failed to update data on server');
        }

        return await response.json();
    },

    delete: async (id: string) => {
        const response = await fetch(`https://woozy-whiskey-shelf.glitch.me/api/shelf/${id}`,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer 94d41fb2a1a6a1cebc3df4d7ffb400863944b812d3f82c37'

                }
            });

        if (!response.ok) {
            throw new Error('Failed to delete data on server');
        }

        return;
    }
};
const resolvers = {
    Query: {
        storeRegionalization: (_, { input }) => {
            // Simulate fetching data from a database or some other source
            return {
                name: 'Sample Store',
                address: '123 Sample St.',
                neighborhood: 'Sampleville',
                city: 'Sample City',
                state: 'ST',
                postalCode: '12345',
                hour: '9am - 5pm',
                products: [
                    {
                        id: '1',
                        image: 'sample_image_url',
                        name: 'Sample Product',
                        listPrice: 100.0,
                        price: 95.0,
                        installments: 4
                    }
                ]
            };
        }
    },

    Mutation: {
        addItem: (_, { input }) => {
            return {
                id: '2',
                image: input.image,
                name: input.name,
                listPrice: input.listPrice,
                price: input.price,
                installments: input.installments
            };
        },

        login: (_, { email, password }) => {
            if (email === "trainee@b8one.com" && password === "123456") {
                return {
                    token: "mocked_token_abcdef123456", // This is the mocked token
                    user: {
                        email: email,
                        id: 'user_123'
                    }
                };
            } else {
                throw new Error("Incorrect email or password.");
            }
        }
    }
};

module.exports = resolvers;


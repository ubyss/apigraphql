const mockMinicartItems = [
    {
        id: "1",
        price: 25.99,
        quantity: 2,
        image: "https://example.com/image1.jpg"
    },
    {
        id: "2",
        price: 15.49,
        quantity: 1,
        image: "https://example.com/image2.jpg"
    }
];


const resolvers = {
    Query: {
        getMinicart: () => mockMinicartItems
    },

    Mutation: {
        addItemToMinicart: (_, { id, price, quantity, image }) => {
            const newItem = { id, price, quantity, image };
            mockMinicartItems.push(newItem);
            return newItem;
        },

        removeItemFromMinicart: (_, { id }) => {
            const itemIndex = mockMinicartItems.findIndex(item => item.id === id);
            if (itemIndex > -1) {
                mockMinicartItems.splice(itemIndex, 1);
                return true;
            } else {
                return false;
            }
        }
    }
};

module.exports = resolvers;


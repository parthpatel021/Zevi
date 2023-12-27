import Stars from "../Components/Stars";

const filterInfoData = [
    {
        name: 'Brand',
        filters: [
            {
                name:'Mango',
                parameter: 'Mango',
            },
            {
                name:'H&M',
                parameter: 'H&M',
            },
        ],
        parameterName: 'brand'
    },
    {
        name: 'Price Range',
        filters: [
            {
                name: 'Under 500',
                parameter: {sPrice: 0, ePrice:500},
            },
            {
                name: '1000 To 3000',
                parameter: {sPrice: 1000, ePrice:3000},
            }
        ],
        parameterName: 'priceRange'
    },
    {
        name: 'Ratings',
        filters: [
            {
                name: <Stars rating={5} />,
                parameter: 5,
            },
            {
                name: <Stars rating={4} />,
                parameter: 4,
            },
            {
                name: <Stars rating={3} />,
                parameter: 3,
            },
            {
                name: <Stars rating={2} />,
                parameter: 2,
            },
            {
                name: <Stars rating={1} />,
                parameter: 1,
            },
        ],    
        parameterName: 'rating'
    }

];

export default filterInfoData;
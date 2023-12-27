import Stars from "../Components/Stars";

const filterData = [
    {
        name: 'Brand',
        filters: [
            'Mango',
            'H&M',
        ]
    },
    {
        name: 'Price Range',
        filters: [
            'Under 500',
            '1000 To 3000',
        ]
    },
    {
        name: 'Ratings',
        filters: [
            <Stars rating={5} />,
            <Stars rating={4} />,
            <Stars rating={3} />,
            <Stars rating={2} />,
            <Stars rating={1} />,
        ]
    }

];

export default filterData;
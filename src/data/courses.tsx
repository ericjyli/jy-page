interface course {
    index: string;
    name: string;
    link: string;
}

const courses: course[] = [
    {
        index: 'ECE241',
        name: 'Digital Systems',
        link: 'https://engineering.calendar.utoronto.ca/course/ece241h1'
    },
    {
        index: 'ECE243',
        name: 'Computer Organization',
        link: 'https://engineering.calendar.utoronto.ca/course/ece243h1'
    },
    {
        index: 'ECE297',
        name: 'Software Design and Communication',
        link: 'https://engineering.calendar.utoronto.ca/course/ece297h1'
    },
    {
        index: 'ECE231',
        name: 'Introduction to Electronics',
        link: 'https://engineering.calendar.utoronto.ca/course/ece231h1'
    },
    {
        index: 'ECE326',
        name: 'Programming Languages',
        link: 'https://engineering.calendar.utoronto.ca/course/ece326h1',
    },
    {
        index: 'ECE344',
        name: 'Operating Systems',
        link: 'https://engineering.calendar.utoronto.ca/course/ece344h1'
    },
    {
        index: 'ECE345',
        name: 'Algorithms and Data Structures',
        link: 'https://engineering.calendar.utoronto.ca/course/ece345h1'
    }
];

export { courses };
interface Course {
    index: string;
    name: string;
    link: string;
}

const courses: Course[] = [
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
        index: 'ECE344',
        name: 'Operating Systems',
        link: 'https://engineering.calendar.utoronto.ca/course/ece344h1'
    },
    {
        index: 'ECE345',
        name: 'Algorithms and Data Structures',
        link: 'https://engineering.calendar.utoronto.ca/course/ece345h1'
    },
    {
        index: 'ECE361',
        name: 'Computer Networks',
        link: 'https://engineering.calendar.utoronto.ca/course/ece361h1'
    },
    {
        index: 'ECE421',
        name: 'Introduction to Machine Learning',
        link: 'https://engineering.calendar.utoronto.ca/course/ece421h1'
    },
    {
        index: 'ECE368',
        name: 'Probablistic Reasoning',
        link: 'https://engineering.calendar.utoronto.ca/course/ece368h1'
    }
];

export { courses };
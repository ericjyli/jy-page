import { ReactNode } from 'react';
import { Typography} from 'antd';
const { Link } = Typography;

interface ExperienceProps {
    title: string;
    overview?: ReactNode; // ReactNode allows JSX elements or strings
    description: ReactNode[];
}

const experiences: ExperienceProps[] = [
    {
        title: 'Baixing AI - Full Stack Engineer',
        overview: (
            <>
            Main project: <Link href="https://www.navit.ai">Navit.ai</Link> <br />
                                    Navit is a platform for exploring various types of bots. It offers users easy access to these intriguing bots and provides developers with the convenience of integrating their API Bots into the platform.            
            </>

        ),
        description: [
            'Developed synchronous and asynchronous callback interfaces between the backend server of the website and the API bots server.',
            'Drafted detailed documentation with Gitbook for developers to be able to integrate their chatbots on the website in less than 10 minutes with up to 5 additional chat functionalities.',
            'Applied prompt engineering integrated with external tools to build more than 10 API bots, and enabled interactions between bots which amazed users.',
            'Containerized the API bots with Docker and deployed them on serverless Kubernetes cluster, using Jenkins for the CI and Argo for the CD to automate the pipeline.'
        ]

    },
    {
        title: 'US Natural Gas Data Visualization Website - Project Leader',
        overview: (
            <>
                A project with a group of 3 developing a website which calls several APIs for the data, and visualizes the data using tools including Pandas, Matplotlib, etc. <br/>
                <Link href="https://usnaturalgas.ericjyli.com"> usnaturalgas.ericjyli.com </Link>
            </>
        ),
        description: [
                'Established a comprehensive system including front-end, back-end, and database server using AWS Amplifier, EC2, and RDS with CI/CD and automatic data updates.',
                'Engineered and executed the backend interface structures utilizing FastAPI.',
                'Configured Nginx to proxy HTTPS requests and redirect HTTP requests.'
        ]
    },
    {
        title: 'Map Application - Software Engineer',
        overview: (
            <>
                University of Toronto, Toronto, Canada
            </>
        ),
        description: [
            'Designed optimized data structures for quick loading and storage of data from external API.',
            'Developed a user-friendly map application interface using the EZGL library.',
            'Implemented algorithms for efficient path finding within 3 seconds, and generated path instructions with text-to-speech accessibility feature.',
            'Parallelize various algorithms to optimize the solution of the Traveling Salesman Problem.'
        ]
    },
    {
        title: 'Advanced Processor Design - Hardware Developer',
        overview: (
            <>
                University of Toronto, Toronto, Canada
            </>
        ),
        description: [
            'Implemented a basic processor that can do basic register operations using Verilog.',
            'Enhanced the processor with more advanced functionalities by including a program counter, memory interface and more operations such as push&pop, branch, and etc.'
        ]
    },
    {
        title: 'Sudoku Game - Software Developer',
        overview: (
            <>
                University of Toronto, Toronto, Canada
            </>
        ),
        description: [
            'Implemented backtrack algorithm to generate random solvable Sudoku games and stored the data of every finished game.',
            'Designed a user-friendly interface with clear frames and different colors, making it very easy for the user to read the board and fill in numbers to play the game.',
            'Updated the entire program using C++ object-oriented programming to improve the readability and extensibility.'
        ]
    },
    {
        title: 'Engineering Design of energy monitoring system for condo buildings - Engineering Team Leader',
        overview: (
            <>
                University of Toronto, Toronto, Canada
            </>
        ),
        description: [
            'Drafted the project requirement approve by the engineering manager with detailed consideration and definition of the Gap, Need, Scope.',
            'Developed and tested the machine learning algorithm that helped provide energy usage suggestions.',
            'Proposed the measures of success to test the prototype and achieved all of our goals.'
        ]
    }


];

export { experiences }
import { characters } from "./mutations/mutations";

const filterOptions = {

    species: [
        {
            value: 'Alien',
            selected: false
        },
        {
            value: 'Human',
            selected: false
        },
        {
            value: 'Others',
            selected: false
        }
    ],
    gender: [
        {
            value: 'Male',
            selected: false
        },
        {
            value: 'Female',
            selected: false
        },
        {
            value: 'unknown',
            selected: false
        }
    ]
}


export default filterOptions;

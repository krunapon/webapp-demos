import {people} from './data.js';

export default function List() {
    const listItems = people.map((person) =>
        <li key={person.id}>
            <p>
                <b>{person.name}</b> is a {person.profession}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>
}
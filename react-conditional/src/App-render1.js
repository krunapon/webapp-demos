const people = [
    {id:0, name: 'Manee', profession: 'mathematician' },
    {id:1, name: 'Mana', profession: 'engineer' },
    {id:2, name: 'Chujai', profession: 'biologist' },
    {id:3, name: 'Piti', profession: 'engineer' }
  ]
  
  export default function List() {
      const engineers = people.filter(person => person.profession === 'engineer');
      const listItems = engineers.map((person) =>
          <li key={person.id}>
              <p>
                  <b>{person.name}</b> is a {person.profession}
              </p>
          </li>
      );
      return <ul>{listItems}</ul>
  }
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
type ObjectWithIdArray = Array<{ id: number }>;
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

declare const backpack: Backpack<string>;
const object = backpack.get();
backpack.add("hello");
// backpack.add(23); // Error!
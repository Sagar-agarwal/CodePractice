declare let dir: {
    [key: string]: {
        phone: number;
        street: string;
        city: string;
        country: string;
    };
};
interface Post {
    id: number;
    data: string;
}
interface User {
    name: string;
    posts: Array<Post>;
    hashes: Array<number>;
}
declare var user1: User;
declare function printAll(strs: string | string[] | null): void;

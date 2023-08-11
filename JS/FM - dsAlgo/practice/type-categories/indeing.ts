// Indexing
let dir: {
  [key: string]: {
    phone: number;
    street: string;
    city: string;
    country: string;
  };
} = {};

dir.user1 = {
  phone: 1,
  street: 'abc',
  city: 'London',
  country: 'UK',
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

var user1: User = {
  name: 'Jack',
  posts: [
    { id: 1, data: 'post1' },
    { id: 2, data: 'post' },
  ],
  hashes: [1, 2, 3, 4, 5, 6],
};

function printAll(strs: string | string[] | null) {
  if (typeof strs === 'object') {
    for (const s of strs) {
      // 'strs' is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
    // do nothing
  }
}

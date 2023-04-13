const http = new EasyHTTP();

// http.get('https://jsonplaceholder.typicode.com/posts', 
//             function (err, response){
//                 if (err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log(response);
//                 }
//             });

const data = {
    "title": "this is title 101",
    "body": "title 101 body",
    "userId": 1
};

http.post('https://jsonplaceholder.typicode.com/posts',
        data,
        function (err, res) {
            console.log('Res: ' + res);
        });
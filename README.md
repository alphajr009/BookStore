
# Book Store Application

This Book Store application is done for Academic purpose using MERN Stack, this can be use for add new book to database show all book and delete book by its ISBN.

![adilroom](https://i.imgur.com/QAd09la.png)


## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

1. Node.js and npm should be installed on your machine.
2. MongoDB should be installed and running.

### Installation

1. Clone this repository to your local machine.

```bash
git clone 
cd BookStore
```

2. Install the project dependencies.

```bash
npm install
```

3. Set up your environment variables.

Create a .env file in the root directory of the project and add the following variables:

```bash
MONGODB_URI=your_mongodb_connection_uri
```

4. Start the application.

This will also start the React with concurrent library.

```bash
npm start
```

The App will be available at http://localhost:3000.




### Postman API Collection

You can import the provided Postman API collection to test the API routes. The collection is available in the BookStore.postman_collection.json file.


1. Route for add a new book.

Change the Body - raw - JSON as below for your book's title , author , ISBN 

![addBook](https://i.imgur.com/o8JiYFj.png)

2. Route for fetching all books.

The fetch books will show in the body as below

![fetchall](https://i.imgur.com/9gumG7r.png)


3. Route for delete a book by ISBN.

Change the Body - raw - JSON as below for Book's ISBN 

![deleteBook](https://i.imgur.com/lSXr6dw.png)


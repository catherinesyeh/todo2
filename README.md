# todo2
Todo app made with Node.js and MongoDB

## setup instructions
1. Clone this repo:
```
git clone https://github.com/catherinesyeh/todo2.git
```

2. You will need to create & save an ```env``` file with your MongoDB connection string, e.g.,
```
DB_CONNECT = mongodb+srv://cyeh_m0cluster:<password>@cluster0.yglgu5f.mongodb.net/?retryWrites=true&w=majority
```

3. Make sure you have Node.js installed

4. Start the app:
```
npm start
```

5. Navigate to ```http://localhost:3000/``` in your browser to start exploring.

## features
The app comes preloaded with a few todo items as an example.

![Screenshot of todo app](public/img/screenshot1.png)

*Try these features out!*
1. Type a todo into the input box and press the ```+``` button to add it to the list
2. Check off a todo by clicking on it
3. Edit or remove a todo by pressing the ```pencil``` or ```X``` icons on the right of each item

![Screenshot of todo app in edit view](public/img/screenshot2.png)

4. Once you press the ```edit``` button, you can change the todo text and then confirm/cancel your request

## resources used
I followed the medium tutorial provided in the assignment description: [https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039](https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039) with some modifications.

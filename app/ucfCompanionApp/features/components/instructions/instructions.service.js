angular
    .module('toDoList.component.todos')
    .service('todos', TodosService);

function TodosService($http) {
    return {
        // getting all the tasks from the router
        getTodos: function (todos) {
            $http.get('/api')
                .then(function (response) {
                    response.data.forEach(function(item) {
                        todos.push(item);
                    });
                });
        },

        // adding a new todo via the router
        addTodo: function (newTodo, date) {
            $http({
                method: 'POST',
                url: '/api',
                data: {
                    toDoItem: newTodo,
                    dueDate: date
                }
            }).then(function (response) {
                // do nothing
            }).catch(function (error) {
                console.log('error posting', error);
            });
        },

        // updating a todo from complete to incomplete and vice versa
        // id is the todo item id, and completed is a boolean true/false
        // for setting the status of the todo
        updateTodo: function (id, completed) {
            $http({
                method: 'PUT',
                url: '/api',
                data: {
                    _id: id,
                    isCompleted: completed
                }
            }).then(function (response) {
                //do nothing
            }).catch(function(error) {
                console.log('error putting', error);
            })
        }
    };
}
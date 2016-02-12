var app = angular.module('toDoApp', []);

app.controller('ToDoController', ['$scope', '$filter', function ($scope, $filter) {

  var orderBy = $filter('orderBy');
  var taskList = this;
  taskList.tasks = [];
  $scope.editIndex = false;
  $scope.reverse = false;

  $scope.order = function(p) {
    $scope.predicate = p;
    $scope.reverse = ($scope.predicate === p) ? !$scope.reverse : false;
    taskList.tasks = orderBy(taskList.tasks, p, $scope.reverse);
  }
  $scope.addTask = function ()
  {
    taskList.tasks.push({task: taskList.task, done: false, date: taskList.date, description: taskList.desc});
    taskList.task = '';
    taskList.desc = '';
    taskList.date = null;
  }

  $scope.doneTask = function (index)
  {
    taskList.tasks[index].done = true;
  }
  $scope.unDoneTask = function (index)
  {
    taskList.tasks[index].done = false;
  }
  $scope.deleteTask = function (index)
  {
    taskList.tasks.splice(index, 1);
  }

}]);

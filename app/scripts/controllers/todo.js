angular.module('angularTrainingApp').controller('ToDoCtrl', function ($scope ) {
	$scope.todos = [{name: "Learn Html", status: false,trainer: ""},
									{name: "Learn Css", status: false, trainer: ""},
									{name: "Learn Angular", status: false, trainer: ""}
								 ]
	$scope.msg = "";
	$scope.task = {name:"", status: false, trainer: ""};
	$scope.markComplete = function(value){
		$scope.todos.forEach(function (data){
			if (data.name  == value){
				if (data.status == false){
					data.status = true
				}else{
					data.status = false
				}

			}

		});
	};

	$scope.addNewTask = function(task){
		$scope.todos.push(task)
		$scope.task = {name:"", status:false}
	}

	$scope.deleteTask = function(task){
		$scope.todos.splice($scope.todos.indexOf(task),1)
	}
})
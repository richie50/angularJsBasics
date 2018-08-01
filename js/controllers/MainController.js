app.controller("MainController" , function($scope , userRepo){ // scope is a glabal object seen by DOM and View and Controller
     userRepo.getAllUsers().then(function(response) { //resolved
         if(response.status === 200){
            $scope.users = response.data.splice(0 , 10);
            console.log($scope.users);
         }
        },function(error){ //reject
            console.log("error" , error)
        });
    
    $scope.list  = ["Damn son" , "Angular One"];
    console.log("Hello world " , $scope.list);

    $scope.addItem = function(){ //a click listener whichs adds an input term to the scope listing object
        console.log("Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: item in list, Duplicate key: undefined:undefined, Duplicate value: undefinedDuplicates in a repeater");
        console.log("fixed it by adding [track by $index] which tracks it by the indexed array " , $scope.addToDo);
        $scope.list.push($scope.addToDo); //
    }
    $scope.clearItem =  function(item){ // put this on the li
        var spliceIndex; // i hate this
        if(item){
            spliceIndex = $scope.list.indexOf(item);
            $scope.list.splice(spliceIndex , $scope.list.length);
        }
    }
});


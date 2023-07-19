function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    scope: {
      member: '='
    },
    controller: function($scope) {
      $scope.showSkills = false;
      $scope.toggleSkills = function() {
        $scope.showSkills = !$scope.showSkills;
      };
    }
  };
}
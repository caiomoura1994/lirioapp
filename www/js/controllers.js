angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function(title,subtitle) {
    $scope.modal.show();
    $scope.title = title
    $scope.subtitle = subtitle
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('NewsCtrl', function($scope) {
  $scope.news = [
    { title: 'Culto dos Jovens ', subtitle:'Sobre o culto: aasadfojsdfoijasdofijasoidjfoiasjdfoiajdsoifjasodifjaoidjfoiajdfoijadsoifjaoidsfjioasdjfoiajdsfoijadsoifjaoidjfoiadjgonfaondaoidsjfoiadjsfoiajsdfoijasd', url: 'cultodosjovens',image:'http://blog.cancaonova.com/cuiaba/files/2015/12/altar.jpg'},
    { title: 'Culto de orações',subtitle:'Sobre de orações: cultoaasadfojsdfoijasdofijasoidjfoiasjdfoiajdsoifjasodifjaoidjfoiajdfoijadsoifjaoidsfjioasdjfoiajdsfoijadsoifjaoidjfoiadjgonfaondaoidsjfoiadjsfoiajsdfoijasd', url: 'cultodeoracao', image:'http://www.saleluz.org/site/wp-content/uploads/2015/07/oor.jpg'},
    { title: 'Vigilia',subtitle:'Sobre a vigilia: cultoaasadfojsdfoijasdofijasoidjfoiasjdfoiajdsoifjasodifjaoidjfoiajdfoijadsoifjaoidsfjioasdjfoiajdsfoijadsoifjaoidjfoiadjgonfaondaoidsjfoiadjsfoiajsdfoijasd', url: 'vigilia', image:'http://mensagens.culturamix.com/blog/wp-content/gallery/o-poder-da-oracao/o-poder-da-oracao-6.jpg'}

  ];
})

.controller('ChurchServicesCtrl', function($scope) {
  $scope.services = {
    sunday:{
      dayname: 'Domingo',
      services:
      [
        {hour: '07:00', name: 'CULTO DA ALVORADA'},
        {hour: '09:00', name: 'ESCOLA BÍBLICA'},
        {hour: '10:00', name: 'CULTO DA FAMÍLIA'},
        {hour: '10:00', name: 'EBD INFANTIL'},
        {hour: '17:00', name: 'CULTO DA BENÇÃO'},
        {hour: '19:00', name: 'CULTO DE CELEBRAÇÃO'}
      ]},
    saturday:{
      dayname: 'Sábado',
      services:
      [
        {hour: '15:00', name: 'DESPERTA DÉBORA'},
        {hour: '17:00', name: 'CULTO DE ADOLESCENTES'},
        {hour: '17:00', name: 'ENSAIO DO CORAL'},
        {hour: '19:30', name: 'SABADÃO JOVEM'}
      ]}
  };
})


angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/leiamais.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLeiamais = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.leiamais = function(title,subtitle) {
    $scope.modal.show();
    $scope.title = title
    $scope.subtitle = subtitle
  };
})

.controller('NewsCtrl', function($scope) {
  $scope.news = [
    { title: 'Culto dos Jovens ', subtitle:'Sobre o culto: aasadfojsdfoijasdofijasoidjfoiasjdfoiajdsoifjasodifjaoidjfoiajdfoijadsoifjaoidsfjioasdjfoiajdsfoijadsoifjaoidjfoiadjgonfaondaoidsjfoiadjsfoiajsdfoijasd', url: 'cultodosjovens',image:'http://blog.cancaonova.com/cuiaba/files/2015/12/altar.jpg'},
    { title: 'Culto de orações',subtitle:'Sobre de orações: cultoaasadfojsdfoijasdofijasoidjfoiasjdfoiajdsoifjasodifjaoidjfoiajdfoijadsoifjaoidsfjioasdjfoiajdsfoijadsoifjaoidjfoiadjgonfaondaoidsjfoiadjsfoiajsdfoijasd', url: 'cultodeoracao', image:'http://www.saleluz.org/site/wp-content/uploads/2015/07/oor.jpg'},
    { title: 'Vigilia',subtitle:'Sobre a vigilia: cultoaasadfojsdfoijasdofijasoidjfoiasjdfoiajdsoifjasodifjaoidjfoiajdfoijadsoifjaoidsfjioasdjfoiajdsfoijadsoifjaoidjfoiadjgonfaondaoidsjfoiadjsfoiajsdfoijasd', url: 'vigilia', image:'http://mensagens.culturamix.com/blog/wp-content/gallery/o-poder-da-oracao/o-poder-da-oracao-6.jpg'}

  ];
})

.controller('contactCtrl', function($scope) {
  $scope.contact = [
    { nome: 'George Barros de Moura ',  tel:'+5571988362338',avatar:'http://www.gravatar.com/avatar/563562a5c924aac52c903ddf4fd80fa8?s=100&r=PG&d=http:%2F%2Fcdn-careers.sstatic.net%2Fcareers%2FImg%2Fdefault-user-gravatar-large.png%3Fv%3D4c7dc2ac35fe', funcao:'Comissão de TI', email:'gwmoura@gmail.com'},
    { nome: 'Caio Barros de Moura', tel:'+5571991747372', avatar:'https://scontent.cdninstagram.com/t51.2885-19/s150x150/12558913_1115307891942482_124308009_a.jpg', funcao:'Comissão de TI', email:'caiomoura1994@gmail.com'},
    { nome: 'Matheus alguma coisa', tel:'+5571988149890', avatar:'http://mensagens.culturamix.com/blog/wp-content/gallery/o-poder-da-oracao/o-poder-da-oracao-6.jpg', funcao:'Comissão de TI', email:'matheusblima@gmail.com'}

  ];
})
.controller('contactitem', function ($scope, $stateParams) {

            $scope.id = $stateParams.id;
            $scope.tel = $stateParams.tel;
            $scope.email = $stateParams.email;
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

.controller('doacoesCtrl', function($scope, $cordovaClipboard) {
  $scope.services = {
    sunday:{
      tipo_pagamento: 'Transferencia ou deposito',
      services:
      [
        {banco:'Banco do Brasil',agencia: '2792-2', conta: '15888-8',sacado: 'IBLV'},
        {banco:'Banco do Bradesco',agencia: '3214-12', conta: '158334-8',sacado: 'IBLV'},
        {banco:'Banco do Itau',agencia: '3213-2', conta: '238334-8',sacado: 'IBLV'},
        {banco:'Banco da Caixa',agencia: '32232-12', conta: '3358334-8',sacado: 'IBLV'},
              ]},
    saturday:{
      tipo_pagamento: 'Boleto Bancário',
      services2:
      [
        {linhadigitavel:'000000000000000000000000000', sacado: 'IBLV'},
        
      ]}
  };

  $scope.copyText = function(value) {
    console.log("value", value);
        $cordovaClipboard.copy(value).then(function() {
            console.log("Copied text");
        }, function() {
            console.error("There was an error copying");
        });
    };
})

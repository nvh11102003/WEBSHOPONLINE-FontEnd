var app = angular.module("hieunvph28088", [])
app.controller("hieunvph28088-ctrl", function ($scope, $http) {
    $http.get("https://63ec4a2a31ef61473b200a35.mockapi.io/PH28088/phukiendienthoai")
        .then(function (response) {
            //lấy dữ liệu
            var data = response.data;

            //truyền lên giao diện
            $scope.products = data;
        });
    $http.get("https://63ec4a2a31ef61473b200a35.mockapi.io/PH28088/phukiendienthoai/?limit=3&page=1")
        .then(function (response) {
            //lấy dữ liệu
            var data = response.data;

            //truyền lên giao diện
            $scope.producs = data;
        });
    $scope.getProduct = function (productId) {
        $http.get("https://63ec4a2a31ef61473b200a35.mockapi.io/PH28088/phukiendienthoai/" + productId)
            .then(function (response) {
                //lấy dữ liệu
                var data = response.data;

                //truyền lên giao diện
                $scope.selectedProduct = data;
            });
    };
    $scope.search = function () {
        var Name = document.getElementById("NameText").value;
        console.log(Name)
        $http.get("https://63ec4a2a31ef61473b200a35.mockapi.io/PH28088/phukiendienthoai?name=" + Name)
            .then(function (response) {
                //lấy dữ liệu
                var data = response.data;
                //truyền lên giao diện
                console.log(data)
                $scope.products = data;
                $http(".search-area").removeClass("search-active")
            });
    }

});

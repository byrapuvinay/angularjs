// Code goes here

angular.module('menuModule', []).

factory('menuModule.menuLoader', function() {
    return function(callback) {
        callback([  {menuName:"Add Users", menuItem:[ {name:"Add Student",linkName:"#/AddStudent"},
            {name:"Add Teacher",linkName:"#/AddTeacher"},
            {name:"Add Accountant",linkName:"#/AddAccountant"}
            ]},
            {menuName:"Reports", menuItem:[ {name:"Completed",linkName:"AddStudent.html"},
                {name:"Pending",linkName:"AddStudent1.html"},
                {name:"Cost",linkName:"AddStudent1.html"}
            ]},
            {menuName:"Services", menuItem:[ {name:"TC",linkName:"AddStudent.html"},
                {name:"Tests",linkName:"AddStudent1.html"},
                {name:"Progress",linkName:"AddStudent1.html"}
            ]},
            {menuName:"Others", menuItem:[ {name:"TC",linkName:"AddStudent.html"},
                {name:"Tests",linkName:"AddStudent1.html"},
                {name:"Progress",linkName:"AddStudent1.html"}
            ]}
        ])
    }
});


angular.module('nameApp', ['ngRoute', 'menuModule','ngTable'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/AddAccountant', {
                templateUrl: 'AccountantAdd.html',
                controller: 'addAccountantCtrl'


            })
            .when('/AddTeacher', {
                templateUrl: 'TeacherAdd.html',
                controller: 'addTeacherCtrl'


            })
            .when('/AddStudent', {
                templateUrl: 'StudentAdd.html',
                controller: 'addStudentCtrl'

            });


    })
    .controller('attendanceShortageCtrl', function($scope, $filter, NgTableParams) {
    var data = [
        {admNo: 123456, name:"VKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", attendance: "20%" },
        {admNo: 223456, name:"Kumar",fname:"VKumar", fPhone: "9999999999",className:"5st",attendance: "22%"},
        {admNo: 323456, name:"Kumar3",fname:"VKumar", fPhone: "9999999999",className:"6st",attendance: "23%"},
        {admNo: 423456, name:"Kumar3",fname:"VKumar", fPhone: "9999999999",className:"7st",attendance: "29%"},
        {admNo: 523456, name:"Kumar4",fname:"VKumar", fPhone: "9999999999",className:"1st", attendance: "27%" },
        {admNo: 523456, name:"Kumar4",fname:"VKumar", fPhone: "9999999999",className:"1st", attendance: "40%" },
        {admNo: 723456, name:"Vijay Kumar",fname:"VKumar", fPhone: "9999999999",className:"6st",attendance:"50%"},
        {admNo: 823456, name:"Remesh Kumar",fname:"VKumar", fPhone: "9999999999",className:"7st",attendance: "60%"},
        {admNo: 923456, name:"ajay Kumar",fname:"VKumar", fPhone: "9999999999",className:"1st", attendance: "60%" },
        {admNo: 1023456, name:"Ram Kumar",fname:"VKumar", fPhone: "9999999999",className:"5st",attendance: "60%"},
        {admNo: 1323456, name:"Shaym Kumar",fname:"VKumar", fPhone: "9999999999",className:"6st",attendance: "60%"},
        {admNo: 1423456, name:"Abhay Kumar",fname:"VKumar", fPhone: "9999999999",className:"7st",attendance: "6%"}
    ];

    $scope.tableParams = new NgTableParams({
        page: 1,            // show first page
        count: 15,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            var orderedData = params.sorting() ?
                $filter('orderBy')(data, params.orderBy()) :
                data;
            params.total(data.length);
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

})
    .controller('addStudentCtrl', function ($scope, $http) {

        $scope.addUser = function () {

            $http.post('http://localhost:8090/test/user', $scope.user).
                success(function(data, status, headers, config) {
                    alert("User details are added successfully ");
                }).
                error(function(data, status, headers, config) {
                    alert("Failure");
                });

        };


    })
    .controller('feePaidDetailsCtrl', function($scope, $filter, NgTableParams) {
    var data = [
        {admNo: 123456, name:"VKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid" },
        {admNo: 223456, name:"Kumar",fname:"VKumar", fPhone: "9999999999",className:"5st",term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid" },
        {admNo: 323456, name:"Kumar3",fname:"VKumar", fPhone: "9999999999",className:"6st",term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid" },
        {admNo: 423456, name:"Kumar3",fname:"VKumar", fPhone: "9999999999",className:"7st",term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid" },
        {admNo: 523456, name:"Kumar4",fname:"VKumar", fPhone: "9999999999",className:"1st", term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid"  },
        {admNo: 523456, name:"Kumar4",fname:"VKumar", fPhone: "9999999999",className:"1st", term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid" },
        {admNo: 723456, name:"Vijay Kumar",fname:"VKumar", fPhone: "9999999999",className:"6st",term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid" },
        {admNo: 823456, name:"Remesh Kumar",fname:"VKumar", fPhone: "9999999999",className:"7st",term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid" },
        {admNo: 923456, name:"ajay Kumar",fname:"VKumar", fPhone: "9999999999",className:"1st", term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid" },
        {admNo: 1023456, name:"Ram Kumar",fname:"VKumar", fPhone: "9999999999",className:"5st",term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid" },
        {admNo: 1323456, name:"Shaym Kumar",fname:"VKumar", fPhone: "9999999999",className:"6st",term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid" },
        {admNo: 1423456, name:"Abhay Kumar",fname:"VKumar", fPhone: "9999999999",className:"7st",term1: "Paid", term2: "Paid", term3: "Not Paid",transport:"Paid" }
    ];

    $scope.tableParams = new NgTableParams({
        page: 1,            // show first page
        count: 15,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            var orderedData = params.sorting() ?
                $filter('orderBy')(data, params.orderBy()) :
                data;
            params.total(data.length);
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

})
    .controller('feePendingCtrl', function($scope, $filter, NgTableParams) {
        var data = [
            {admNo: 123456, name:"VKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", feePending: 10000,transportFeePending: 5000 },
            {admNo: 223456, name:"Kumar",fname:"VKumar", fPhone: "9999999999",className:"5st",feePending: 20000,transportFeePending: 6000},
            {admNo: 323456, name:"Kumar3",fname:"VKumar", fPhone: "9999999999",className:"6st",feePending: 40000,transportFeePending: 3000},
            {admNo: 423456, name:"Kumar3",fname:"VKumar", fPhone: "9999999999",className:"7st",feePending: 20000,transportFeePending: 2000},
            {admNo: 523456, name:"Kumar4",fname:"VKumar", fPhone: "9999999999",className:"1st", feePending: 130000,transportFeePending: 3300 },
            {admNo: 523456, name:"Kumar4",fname:"VKumar", fPhone: "9999999999",className:"1st", feePending: 130000 ,transportFeePending: 4000},
            {admNo: 723456, name:"Vijay Kumar",fname:"VKumar", fPhone: "9999999999",className:"6st",feePending:100200,transportFeePending: 2000},
            {admNo: 823456, name:"Remesh Kumar",fname:"VKumar", fPhone: "9999999999",className:"7st",feePending: 102000,transportFeePending: 1000},
            {admNo: 923456, name:"ajay Kumar",fname:"VKumar", fPhone: "9999999999",className:"1st", feePending: 102000 ,transportFeePending: 2000},
            {admNo: 1023456, name:"Ram Kumar",fname:"VKumar", fPhone: "9999999999",className:"5st",feePending: 100200,transportFeePending: 3000},
            {admNo: 1323456, name:"Shaym Kumar",fname:"VKumar", fPhone: "9999999999",className:"6st",feePending: 100200,transportFeePending: 4000},
            {admNo: 1423456, name:"Abhay Kumar",fname:"VKumar", fPhone: "9999999999",className:"7st",feePending: 100200,transportFeePending: 6000}
        ];

        $scope.tableParams = new NgTableParams({
            page: 1,            // show first page
            count: 15,          // count per page
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;
                params.total(data.length);
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

    })
    .controller('progressReportCtrl', function($scope, $filter, NgTableParams) {
        var data = [
            {admNo: 123456, name:"Kumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 91, hindi: 85, english:86, maths: 98, science: 76, social: 89 },
            {admNo: 223456, name:"SKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 92, hindi: 85, english:86, maths: 98, science: 86, social: 89 },
            {admNo: 323456, name:"BKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 93, hindi: 85, english:86, maths: 98, science: 96, social: 89 },
            {admNo: 423456, name:"RKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 94, hindi: 85, english:86, maths: 98, science: 66, social: 89 },
            {admNo: 523456, name:"MKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 95, hindi: 85, english:86, maths: 98, science: 56, social: 89 },
            {admNo: 623456, name:"TKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 96, hindi: 85, english:86, maths: 98, science: 46, social: 89 },
            {admNo: 723456, name:"UKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 97, hindi: 85, english:86, maths: 98, science: 77, social: 89 },
            {admNo: 823456, name:"VKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 98, hindi: 85, english:86, maths: 98, science: 88, social: 89 },
            {admNo: 923456, name:"WKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 70, hindi: 85, english:86, maths: 98, science: 44, social: 89 },
            {admNo: 1123456, name:"XKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 71, hindi: 85, english:86, maths: 98, science: 77, social: 89 },
            {admNo: 133456, name:"UKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 72, hindi: 85, english:86, maths: 98, science: 88, social: 89 },
            {admNo: 143456, name:"PKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", telugu: 73, hindi: 85, english:86, maths: 98, science: 82, social: 89 }

        ];

        $scope.tableParams = new NgTableParams({
            page: 1,            // show first page
            count: 15,          // count per page
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;
                params.total(data.length);
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

    })
    .controller('teacherClassesCtrl', function($scope, $filter, NgTableParams) {
    var data = [
        {teacherName: "Saritha", day:"Monday",Period3: "Social", className3:"5th Class",Period4: "Social", className4:"8th Class"},
        {teacherName: "Saritha",day:"Tuesday",Period1: "Telugu", className1:"2nd Class",Period3: "Social", className3:"6th Class",Period4: "Social", className4:"6th Class"},
        {teacherName: "Saritha",day:"WednesDay",Period1: "Social", className1:"2nd Class",Period2: "Social", className2:"6th Class"},
        {teacherName: "Saritha",day:"Thursday",Period1: "Social", className1:"2nd Class",Period2: "Social", className2:"6th Class",Period5: "Social", className5:"8th Class"},
        {teacherName: "Saritha",day:"Friday",Period1: "Fun Learning", className1:"1st Class",Period2: "Social", className2:"6th Class",Period5: "Social", className5:"8th Class"},

        {teacherName: "Shruthi", day:"Monday",Period3: "Social", className3:"5th Class",Period4: "Social", className4:"8th Class"},
        {teacherName: "Shruthi",day:"Tuesday",Period1: "Telugu", className1:"2nd Class",Period3: "Social", className3:"6th Class",Period4: "Social", className4:"6th Class"},
        {teacherName: "Shruthi",day:"WednesDay",Period1: "Social", className1:"2nd Class",Period2: "Social", className2:"6th Class"},
        {teacherName: "Shruthi",day:"Thursday",Period1: "Social", className1:"2nd Class",Period2: "Social", className2:"6th Class",Period5: "Social", className5:"8th Class"},
        {teacherName: "Shruthi",day:"Friday",Period1: "Fun Learning", className1:"1st Class",Period2: "Social", className2:"6th Class",Period5: "Social", className5:"8th Class"},

        {teacherName: "Vinay", day:"Monday",Period3: "Social", className3:"5th Class",Period4: "Social", className4:"8th Class"},
        {teacherName: "Vinay",day:"Tuesday",Period1: "Telugu", className1:"2nd Class",Period3: "Social", className3:"6th Class",Period4: "Social", className4:"6th Class"},
        {teacherName: "Vinay",day:"WednesDay",Period1: "Social", className1:"2nd Class",Period2: "Social", className2:"6th Class"},
        {teacherName: "Vinay",day:"Thursday",Period1: "Social", className1:"2nd Class",Period2: "Social", className2:"6th Class",Period5: "Social", className5:"8th Class"},
        {teacherName: "Vinay",day:"Friday",Period1: "Fun Learning", className1:"1st Class",Period2: "Social", className2:"6th Class",Period5: "Social", className5:"8th Class"}

    ];

    $scope.tableParams = new NgTableParams({
        page: 1,            // show first page
        count: 15,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            var orderedData = params.sorting() ?
                $filter('orderBy')(data, params.orderBy()) :
                data;
            params.total(data.length);
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

})
    .               controller('transportDetailsCtrl', function($scope, $filter, NgTableParams) {
        var data = [
            {admNo: 123456, name:"VKumar", fname:"VKumar", fPhone: "9999999999", className:"1st", busNo: "KA03ML5428", driverName:"Ravi", driverContactNo:9731122886, pickup:"Mathahalli",drop:"Marathahalli" },
            {admNo: 223456, name:"Kumar",fname:"VKumar", fPhone: "9999999999",className:"5st", busNo: "KA03ML5428", driverName:"Ravi", driverContactNo:9731122886, pickup:"Mathahalli",drop:"Marathahalli"},
            {admNo: 323456, name:"Kumar3",fname:"VKumar", fPhone: "9999999999",className:"6st", busNo: "KA03ML5428", driverName:"Ravi", driverContactNo:9731122886, pickup:"Mathahalli",drop:"Marathahalli"},
            {admNo: 423456, name:"Kumar3",fname:"VKumar", fPhone: "9999999999",className:"7st", busNo: "KA03ML5438", driverName:"Ravi", driverContactNo:9731122886, pickup:"Mathahalli",drop:"Marathahalli"},
            {admNo: 523456, name:"Kumar4",fname:"VKumar", fPhone: "9999999999",className:"1st", busNo: "KA03ML6428", driverName:"Ravi", driverContactNo:9731122886 , pickup:"Mathahalli",drop:"Marathahalli"},
            {admNo: 523456, name:"Kumar4",fname:"VKumar", fPhone: "9999999999",className:"1st", busNo: "KA03ML8428", driverName:"Ravi", driverContactNo:9731122886 , pickup:"Mathahalli",drop:"Marathahalli"},
            {admNo: 723456, name:"Vijay Kumar",fname:"VKumar", fPhone: "9999999999",className:"6st", busNo: "KA04ML5428", driverName:"Ravi", driverContactNo:9731122886, pickup:"Mathahalli",drop:"Marathahalli"},
            {admNo: 823456, name:"Remesh Kumar",fname:"VKumar", fPhone: "9999999999",className:"7st", busNo: "KA06ML5428", driverName:"Ravi", driverContactNo:9731122886, pickup:"Mathahalli",drop:"Marathahalli"},
            {admNo: 923456, name:"ajay Kumar",fname:"VKumar", fPhone: "9999999999",className:"1st", busNo: "KA03ML5428", driverName:"Ravi", driverContactNo:9731122886 , pickup:"Mathahalli",drop:"Marathahalli"},
            {admNo: 1023456, name:"Ram Kumar",fname:"VKumar", fPhone: "9999999999",className:"5st", busNo: "KA07ML5428", driverName:"Ravi", driverContactNo:9731122886, pickup:"Mathahalli",drop:"Marathahalli"},
            {admNo: 1323456, name:"Shaym Kumar",fname:"VKumar", fPhone: "9999999999",className:"6st", busNo: "KA09ML8428", driverName:"Ravi", driverContactNo:9731122886, pickup:"Mathahalli",drop:"Marathahalli"},
            {admNo: 1423456, name:"Abhay Kumar",fname:"VKumar", fPhone: "9999999999",className:"7st", busNo: "KA04ML5428", driverName:"Ravi", driverContactNo:9731122886, pickup:"Mathahalli",drop:"Marathahalli"}
        ];

        $scope.tableParams = new NgTableParams({
            page: 1,            // show first page
            count: 15,          // count per page
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;
                params.total(data.length);
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

    })
    .controller('addAccountantCtrl', function ($scope, $http) {

        $scope.addUser = function () {

            $http.post('http://localhost:8090/test/user', $scope.user).
                success(function(data, status, headers, config) {
                    alert("User details are added successfully ");
                }).
                error(function(data, status, headers, config) {
                    alert("Failure");
                });
        };
    })
.directive('navbar', ['$injector', function($injector) {
    return {
        restrict: 'A',
        templateUrl: 'templates/menu-bar.html',
        scope: {},
        link: function($scope, $element, $attrs) {
            var menuLoaderName = $attrs.navbar+'.menuLoader';
            if ($injector.has(menuLoaderName)) {
                var loaderFn = $injector.get(menuLoaderName);
                loaderFn(function(menuItems) {
                    $scope.items = menuItems;

                });
            }

        }
    };
}])

    .directive('personalDetails', ['$injector', function($injector) {
        return {
            restrict: 'A',
            templateUrl: 'templates/personalDetails.html',
            scope: {}

        };
    }])
    .directive('parentDetaiils', ['$injector', function($injector) {
        return {
            restrict: 'A',
            templateUrl: 'templates/parentDetaiils.html',
            scope: {}

        };
    }])
    .directive('professionalDetails', ['$injector', function($injector) {
        return {
            restrict: 'A',
            templateUrl: 'templates/professionDetails.html',
            scope: {}

        };
    }]);


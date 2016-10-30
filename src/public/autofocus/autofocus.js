(function() {
    'use strict';

    // This is the directive that will be added to any elemen
    // you want to highlight after creation
    angular.module('public')
    .directive('autoFocus', autoFocus);

    function autoFocus() {
        return {
            link: {
                pre: function preLink(scope, element, attr) {
                    console.debug('prelink called');
                    // this fails since the element hasn't rendered
                    //element[0].focus();
                },
                post: function postLink(scope, element, attr) {
                    console.debug('postlink called');
                    // this succeeds since the element has been rendered
                    element[0].focus();
                }
            }
        }
    }

})();


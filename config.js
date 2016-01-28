exports.config = {
    "modules": {
        "definition": false,
        "wrapper": false
    },
    "files": {
        "javascripts": {
            "defaultExtension": 'js',
            "joinTo": {
                'scripts/app.js': /^app/,
                'scripts/vendor.js': /^vendor/
            },
            "order": {
                "before": [
                  'vendor/scripts/angular.js',
                  'vendor/scripts/angular-resource.js',
                  'vendor/scripts/angular-route.js',
                  'vendor/scripts/cozysdk-client.js'
                ]
            }
        },
        "templates": {
            "defaultExtension": 'html',
            "joinTo": 'scripts/app.js'
        },
        "stylesheets" : {
            "joinTo": {'css/app.css': /^app/}
        }
    },
    "paths": {
        "public": "."
    }
};
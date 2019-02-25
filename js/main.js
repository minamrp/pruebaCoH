requirejs.config({
    baseUrl: './',
    paths: {
        jquery: 'dependencies/jquery.min',
        modulo: 'js/modulo',
    }
});

requirejs(['modulo']);


console.log("holisiri!");



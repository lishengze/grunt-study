module.exports = function (grunt) {
    // 任务配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                stripBanners: true,
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd") %> */ \n'
            },
            build:{
                src:'src/test.js',
                dest: 'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
            }
        },
        jshint: {
            options : {
                jshintrc:'.jshintrc'               
            },
            build:['Gruntfile.js', 'src/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 任务注册
    grunt.registerTask('default', ['uglify','jshint']);
};
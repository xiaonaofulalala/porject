var gulp = require("gulp");
var minifyCss = require('gulp-minify-css');//引用css压缩
var uglify = require('gulp-uglify');//引用js压缩
var connect = require('gulp-connect');//开启服务器
var concat = require("gulp-concat");//合并js文件
var sass = require('gulp-sass');

//任务
gulp.task("default",function(){   //default是默认任务  只需要 gulp  就能执行
	console.log("么么哒");
});
//自定义任务
//自定义任务
gulp.task("momo",function(){   //momo是自定义任务  只需要 gulp momo  就能执行
	console.log("爱你哦");
});

gulp.task("html", function(){
	//stream 流  读取
	//"app/**/*.html"  指的是app下面所有子目录的所有html文件
	gulp.src("app/**/*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});

gulp.task("css", function(){
	//app的css压缩，放到dist里面
	gulp.src("app/css/**/*.css")
	.pipe(minifyCss())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());

})

gulp.task("js",function(){
	//app的css压缩  放到dist  里面
	gulp.src(["app/**/*.js","!app/libs/*.js"])
	.pipe(uglify())
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

gulp.task("server", function(){
	//开启一个服务
	connect.server({
        livereload: true,
        port: 8888,
        root:"dist"
    });
})

gulp.task("watch", function(){
	//第一个参数指要watch的文件，第二个参数文件内容改变之后分配的任务
	gulp.watch("app/**/*.js",["js"]);
	gulp.watch("app/css/**/*.css",["css"]);
	gulp.watch("app/**/*.html",["html"]);
	gulp.watch("app/img/*",["img"]);
	gulp.watch("app/scss/**/*.scss",["sass"]);
});

//处理图片，位置迁移
gulp.task("img", function(){
	gulp.src("app/img/*")
	.pipe(gulp.dest("dist/img"))
	.pipe(connect.reload());
});

//复制移动第三方js
gulp.task("libs", function(){
	gulp.src("app/libs/**/*")
	.pipe(gulp.dest("dist/libs"));
})

gulp.task("sass", function(){
	//吧scss文件编译成css，并且放到dist里面
	gulp.src("app/scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("default",["server","html","js","css","watch","img","sass","libs"]);



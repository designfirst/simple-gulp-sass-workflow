
# A Simple Gulp Sass Workflow
##### Compile sass to css with a gulp watch task
#
#
* * *
### Setup Process:
1. __Clone the project:__ `git clone https://github.com/designfirst/ux-lab.git`
2. __Install Dependencies:__ `npm install`
3. __Configure Gulp.js file:__
    * set input variable to your SASS PATH
    * set output variable to your css path
5. __Run the watch task:__ `gulp`
#
There are to tasks in the gulp.js file. The default task is running 'gulp.watch' on the input directory and then running the 'gulp.styles' task whan any files change and then compiles the SCSS files to CSS files.
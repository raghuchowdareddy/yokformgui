This project folder structure is created using the guidlines provided by 
"https://www.sitepoint.com/kickstart-your-angularjs-development-with-yeoman-grunt-and-bower/"

Issue 1: If "grunt serve" not started successfully because of below reason
    Warning: Running "compass:server" (compass) task
    Warning: not found: compass Use --force to continue.
    
    Aborted due to warnings.
Solution: http://stackoverflow.com/questions/28474762/grunt-serve-not-working-compass-error

// From the official documentation at http://compass-style.org/install/
gem install compass
cd <myproject>
compass install compass
========================    
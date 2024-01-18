/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition = "Git is a control system that allows developers and teams to manage, collaborate, and code files. It also allows for tracking changes to the code over time.";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
;=
const gitHubDefinition = "GitHub is an online gathering hub for web developers to showcase and collaborate their work. One can link a remote repository and work on the code as long as they have an online connection. Along with Git commands, you can push changes to the files you've been working on to the online repository.";

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

const gitInitDefinition = "Git init creates a checkpoint or a restart point to the starting directory or master. One should open start git init before making any changes to the code.";

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

const gitCloneDefinition = "Git clone makes an exact copy of a remote Git repository onto your local computer. It allows you to download all the files, history, and branches from a remote repository so that you can work on the project locally.";

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

const gitStatusDefinition = "Git status tells you what is currently happening with your project. It will tell you what changes were done during the initial git init and what is yet to be added and committed.";

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

const gitAddDefinition = "Git add, updates the changes that you made from the initial git init. git add [file name]";
const gitAddCode = "git add .";

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

const gitCommitDefinition = "Git commit updates the branch. Whatever was added previously will be updated, essentially overwriting the initial git init";
const gitCommitCode = 'git commit -m "initial commit"';

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

const gitPushDefinition = "Git push allows you to push all local changes and commits to the online repository on GitHub or whatever remote connection you are uploading to.";
const gitPushCode = "git push origin main";
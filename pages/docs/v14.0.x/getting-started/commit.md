### Introduction
-  When the user enters the key that is given in the ERPNext task into the commit message, that commit will associate with that particular task and show in that task timeline in ERPNext.

### Workflow
- User enters the task key whenever creating a git commit which is the task name in ERPNext.
![task_key](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/2bd3cc6d-c64b-4089-a82e-a769e231c39b)
[initial.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/a0058dcf-b4fb-4136-9ea9-4f71cb3f53f7)

- That commit will associate in ERPNext -> Task doctype. Commit will be added as a timeline log.
![commit_comments](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/4698f30c-41ff-4c58-8321-fd70ba26f6f8)

- In forced commit you can see the forced message in the comment, in all the tasks that are mentioned in that commit
![forced_commit](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/2345c29d-ac94-4e30-b942-34d4a0f06065)

- You can create a branch with a Task name (Key), and whatever commits you make in that branch will be associated with that ERPNext task.
[track_commits_from_branch_name.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/7b2798be-5e86-4932-9beb-b78b737ae93f)

- If you create a commit in the branch that has a task name, and also you add another task name in your commit message, then your commit will be associated with both
[associate_task_name_branch_with_other_task.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/8bb6b433-b0a2-4196-aed7-a4dd5476d1da)

- If sometime user enters the key (Task Name) that has yet to be created, commits for that will be stored in ERPNext, and later on when the Task is created it will associate with that Task.
[future_task_key.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/8bb4ebed-c70c-4830-9829-d3944365de80)

- Default comment in task shows Guest and in comment username will be shown. So, if the organization wants to see their ERPNext user, there is a doctype called **Github User**, User can associate their GitHub username with ERPNext. [You can see here](https://github.com/Improwised/ERPNext-projects-plus/blob/develop/docs/Commit/GITHUB-USER.md) //reform

- Also, user can close their task using statuses like close, closes, closed, fixed, etc. in the commit message with the task key.
[completed_one_task.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/303bcccb-0f64-4314-a922-4ceb37cd02b9)

- All the tasks that are written in the same line will be completed, task keys that are entered in the new line in commit will not be marked as completed
[complete_multiple_task.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/4866a212-18b4-4666-987d-68770ebe9644)
  
- If you want to add a custom status to mark the Task as Completed, you can add it in ERPNext-Projects-Plus Settings. [You can see here](https://github.com/Improwised/ERPNext-projects-plus/blob/develop/docs/Custom%20Task%20Closing%20Configurations/README.md) //reform

- In any case of repository or organization name changing on GitHub, ERPNext-Projects-Plus will update the repository and organization in all Commits, Pull Request and commit comments on the Task timeline

### Comments in Task
- Task comments contain many things like, if your username is associated with ERPNext using Github User, you can go to the user from the comment.
- Commit hash in the comment will take you to GitHub commit.
- Same, in the commit comment, you can find the link of the branch that the commit belongs to and the repository link.
- You can see timing formats like 10 minutes ago in a comment, that is taken from the GitHub creation time of the GitHub commit.

### Commit Storage
- There is a DocType called Commit.
- It will store all the details related to the commit.
- Commit has many fields that redirect to a particular repository or user as shown in the video
[clickable_commit.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/72f94d65-2c13-4ce3-ae8d-6b1cb715847b)

### Important Notes
- Whenever there is a new commit or PR associated with some task, that task timing will be updated.
- If your task name contains a timestamp, it will not be supported.
- If you have a custom script denoting naming in Task, that will be not supported.

#### Supported Naming conventions
- Hash, Auto-Increment, and Expression (Old and New - without timestamp) will be supported.

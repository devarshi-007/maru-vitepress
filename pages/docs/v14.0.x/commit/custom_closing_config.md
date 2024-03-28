### Introduction
- You can define your custom status in ERPNext-Projects-Plus Settings to make TASK complete. You can add a custom status in Task Closing Configuration for the Github table.
- User can add this status to Commit or Pull Request to mark that Task as Completed

### How does it work?
- You can add a custom name like Resolve
- It will support all the words that have Resolved as base string. Like - Resolved, Resolves, Resolve
- Whenever you create a commit or Pull Request using that word and task key, all the tasks name (key) that belongs to the same line will be set as completed in ERPNext, Commits key (task name) that is in the new line will not be completed.
[task_closing_configuration_for_github.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/68f28075-c059-47d7-a7c8-abde6641299e)
# Introduction
- When a user enters the key that is given in Pull Request, that commit will associate with that particular task and show in tabular format in Task.

## Workflow
- When the user enters the key in the pull request, it is associated with that Task in ERPNext.
[pull_request_association.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/e1554ddf-67f5-49d8-bcac-26592f23f148)

- On modifying the pull request, the following things were supported.
    - You can add a new task key in the pull request, it will associate with a new task.
    - You can remove the existing task key.
    - If your pull request closes some task, and then you edit, it will **not open** tasks that are marked as completed.
[multiple_task_association.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/13fd3596-25c5-4783-9a1b-5977ab7e5cbe)

- You can see pull requests associated in Task as tabular form.
- As per your pull request status, it will update in ERPNext (Ex. Open, Close, Draft, Ready for Review, or Merged).
  [pr_dynamic_status.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/b7bb3d65-c275-44ad-b39e-c2dab8c6ed22)

- You can redirect to GitHub and ERPNext tasks from Pull Request as shown in the video.
- In the task, you can choose to redirect to GitHub from the GitHub icon that is shown in tabular form, or you can redirect to the local Pull Request document using the> icon.<br/>
[pull_request_tabular.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/75ee933a-c234-43f6-b973-d5c479ed3991) <br/>
[clickable_pr.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/36ce174b-a1fd-499d-82da-fc11db264bce)

- You can mark a particular Pull Request's Task as Completed using closing status for Task.<br/>
[closing_configuration_demo_for_pr.webm](https://github.com/Improwised/ERPNext-projects-plus/assets/124968745/cdd8c88e-ded0-4a03-9097-c93610f6e217)

- You can also add multiple Task names, but that will mark all those Tasks as Completed.
- If you want to add a custom status to mark the Task as Completed, you can add it in ERPNext-Projects-Plus Settings. [You can see here](https://github.com/Improwised/ERPNext-projects-plus/blob/develop/docs/Custom%20Task%20Closing%20Configurations/README.md) //reform

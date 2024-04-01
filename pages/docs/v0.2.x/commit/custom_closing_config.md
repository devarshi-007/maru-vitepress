# Introduction
In ERPNext-Projects-Plus Settings, you have the flexibility to define custom statuses to mark TASK as complete. By incorporating a custom status in Task Closing Configuration for the GitHub table, users can seamlessly integrate task completion with commits or pull requests.

## How It Works
1. **Custom Status Addition**: Users can designate a custom status, such as "Resolve."
2. **Support for Variations**: The system recognizes all variants of the base string "Resolved," including "Resolved," "Resolves," and "Resolve."
3. **Automatic Task Completion**: When a commit or pull request includes the designated word along with the task key, all associated tasks will be marked as completed within ERPNext. However, tasks listed on new lines within commits will not be automatically completed.
# 'GitHub Credential' Doctype Documentation

### Introduction

- GitHub Credentials is a doctype designed to facilitate the management of OAuth app credentials related to GitHub apps within an organization. Users can add their own credentials such as client ID and secret, which are then utilized for authorization and webhook creation for organizations to which the user has access.


### How to Create a GitHub App

- To create a GitHub app, users must be authorized members of the organization with the necessary access rights. Follow the link below for detailed instructions on creating a GitHub app:

[Creating a GitHub App Documentation](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app)


### How It Works?

1. **Adding Credentials:** Users input their GitHub app credentials, including the client ID and secret, into the GitHub Credentials doctype.

   ![Screenshot from 2024-01-30 18-34-13](https://github.com/Improwised/ERPNext-projects-plus/assets/123358026/2323e49d-2243-42e6-aeba-3d6024c92cc2)
   *Github_Credential Doctype where ClientId & secret add*
   

3. **Authentication Process:** The system uses these credentials for authentication and responds with a URL. Users can use this URL to obtain an access token.


4. **Accessing Organizations:** Once the access token is verified and obtained, users can access a list of organizations. They can then send requests to create webhooks for desired organizations.
   
   ![Github Credential Doctype](https://github.com/Improwised/ERPNext-projects-plus/assets/123358026/821f14c8-796a-432c-9b36-77210390933f) <br/>
   *A page where users can view a list of authorized organizations and request access to create a webhook*
   

5. **Displaying Webhook Status:** After creating webhooks, the GitHub Credentials doctype displays a table listing organizations along with their webhook status (either "Active" or "Inactive").
   
   ![All fetched Organization list](https://github.com/Improwised/ERPNext-projects-plus/assets/123358026/ab58b4ba-9588-45eb-95ae-87c9e3ebd12c)
   *Webhook Status*


6. **Managing Webhooks:** Users can delete organization webhooks using the "Delete Organization" button. Upon deletion, the webhook status is updated to "Inactive." Additionally, users can reactivate webhooks using the "Re-Activate Webhook" button, updating the status to "Active."
   
   ![Deleted Organization](https://github.com/Improwised/ERPNext-projects-plus/assets/123358026/3dba47ae-b61f-4d7a-8129-a57767da83f8)
   *Delete Webhook request sent and then webhook_status display as 'inactive'*


   ![Re-Active Organization](https://github.com/Improwised/ERPNext-projects-plus/assets/123358026/7dbd79f1-c332-4ca8-9fd0-96ce4378890c)
   *Re-Active Webhook request sent and then webhook_status is display as 'Active'*


7. **Reauthorization:** The "Authorize with GitHub" button allows users to resend requests to GitHub for creating webhooks, both for organizations with inactive webhooks and newly added ones.

   ![Re-Authorize for organizations with inactive webhooks and newly added](https://github.com/Improwised/ERPNext-projects-plus/assets/123358026/4c8b609e-0486-46d2-a400-b003ed2eb8c9)
   *Authorize webhook request sent and then inactive and newly  added organization added as 'active'*

## Demo Video

For a visual demonstration of the process, please refer to the following demo video: 
[Github Credentials Demo](https://github.com/Improwised/ERPNext-projects-plus/assets/123358026/526da454-76dd-40da-af92-46825daabe4b)


This documentation provides a comprehensive guide on utilizing GitHub Credentials for managing OAuth app credentials and creating webhooks for GitHub organizations.

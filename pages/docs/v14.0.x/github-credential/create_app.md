# Creating a GitHub OAuth App

GitHub OAuth apps provide a secure way to integrate third-party applications with GitHub accounts or organizations. Follow these steps to create a GitHub OAuth app:

## 1. Access GitHub Settings

- Log in to your GitHub account and navigate to your organization's repository.
- Click on the "Settings" tab located on the right side of the repository's menu.

## 2. Access OAuth Apps

- In the Settings menu, scroll down and find the "OAuth Apps" option under the "Developer settings" section.
- Click on "OAuth Apps" to access the OAuth applications page.

## 3. Register a New Application

- On the OAuth Apps page, click on the "New OAuth App" button.
- Fill in the required details:
  - **Application name**: Enter a name for your OAuth app.
  - **Homepage URL**: Provide the URL of your application's homepage.
    ex. *{hostname}*
  - **Authorization callback URL**: Enter the callback URL where GitHub will redirect users after authentication.
    ex. 
    ```
    {hostname}/api/method/erpnext_projects_plus.github.doctype.github_credential.github_credential.github_callback_handler
    ```

- Click "Register application" to create your OAuth app.

## 4. Obtain Client ID and Client Secret

- After registering the OAuth app, GitHub will generate a unique **Client ID** and **Client Secret**.
- Copy and securely store both the Client ID and Client Secret. You will need these credentials to authenticate your app with GitHub.

## 5. Add it to Github_Credentials Doctype

- Add the Client ID and Client Secret to your ERP's Github Credential doctype for authentication with GitHub.


By following these steps, you can successfully create a GitHub OAuth app for your organization, enabling seamless authorization and integration with GitHub's features.

# Google SSO Setup Guide

Follow these steps to enable Google OAuth2 Login in the E-Commerce Spring Boot application.

## 1. Create a Project in Google Cloud Console
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click on the project dropdown at the top and select **New Project**.
3. Name your project (e.g., `ecommerce-sso`) and click **Create**.

## 2. Configure the OAuth Consent Screen
1. In the left sidebar, navigate to **APIs & Services** > **OAuth consent screen**.
2. Choose **External** user type and click **Create**.
3. Fill in the required fields:
   - **App name**: E-Commerce App
   - **User support email**: Your email
   - **Developer contact info**: Your email
4. Click **Save and Continue**.
5. On the **Scopes** tab, click **Add or Remove Scopes**. Select `.../auth/userinfo.email` and `.../auth/userinfo.profile`.
6. Click **Save and Continue** until the process is complete.

## 3. Create Credentials (Client ID & Secret)
1. Go to **APIs & Services** > **Credentials**.
2. Click **Create Credentials** at the top and select **OAuth client ID**.
3. Choose **Web application** as the Application type.
4. Name your credential (e.g., `Spring Boot Backend`).
5. Under **Authorized redirect URIs**, add the exact URI where Spring Security expects the callback:
   - `http://localhost:8080/login/oauth2/code/google`
6. Click **Create**.
7. A modal will pop up with your **Client ID** and **Client Secret**.

## 4. Configure application.properties
Copy the ID and Secret from the previous step and paste them into `backend/src/main/resources/application.properties`:

```properties
spring.security.oauth2.client.registration.google.client-id=YOUR_CLIENT_ID
spring.security.oauth2.client.registration.google.client-secret=YOUR_CLIENT_SECRET
```

You are now ready to use Google SSO!

# Best Earth Facts

Best Earth Facts is an app that allows users to generate, save, and explore interesting facts about planet Earth. This application provides an engaging way to learn more about our planet through AI-generated content and additional interactive features.

## User Journey

1. **Sign In with ZAPT**
   - When the user opens the app, they are presented with a sign-in page.
   - The user clicks on "Sign in with ZAPT" and chooses their preferred method to sign in (Google, Facebook, Apple, or magic link via email).

2. **Home Page**
   - Upon successful sign-in, the user is redirected to the home page.
   - The home page displays a list of saved Earth facts, if any exist.

3. **Generate a New Fact**
   - The user clicks on the "Generate Fact" button to create a new fact about Earth.
   - The app uses AI to generate a new interesting fact, which is displayed in the input field for the user to review.

4. **Save a Fact**
   - After reviewing or editing the generated fact, the user clicks on the "Save Fact" button.
   - The fact is saved to the user's personal collection and displayed in the list of facts.

5. **View Saved Facts**
   - The user can scroll through their list of saved facts on the home page.
   - Each fact is displayed clearly for easy reading.

6. **Additional Features**
   - **Generate Image**
     - The user can generate an image related to Earth by clicking the "Generate Image" button.
     - An AI-generated image is displayed in the app for the user to view.
   - **Text to Speech**
     - The user can convert the current fact into speech by clicking the "Text to Speech" button.
     - An audio player appears, allowing the user to listen to the fact.
   - **Generate Markdown Story**
     - The user can generate a markdown-formatted story about Earth by clicking the "Generate Markdown Story" button.
     - The story is displayed in a readable format within the app.

7. **Trigger Error for Testing**
   - The user can click the "Trigger Error" button to intentionally cause an error.
   - This allows testing of the Sentry error logging integration.
   - The app will throw an error, which should be captured and logged by Sentry.

8. **Error Logging**
   - The app uses Sentry to capture and monitor errors.
   - This helps in quickly identifying and resolving any issues that arise.

9. **Sign Out**
   - The user can sign out of the app by clicking the "Sign Out" button in the header.

## External Services Used

- **OpenAI ChatGPT API (via `chatgpt_request` event)**
  - Used to generate new facts about Earth and markdown stories.
  - The AI provides content based on prompts in specific formats.

- **OpenAI DALL·E API (via `generate_image` event)**
  - Used to generate images related to Earth based on predefined prompts.

- **Text-to-Speech API (via `text_to_speech` event)**
  - Converts text facts into speech, providing an audio representation.

- **Sentry Error Logging**
  - Captures and monitors errors within the application.
  - Assists in diagnosing and fixing issues promptly.
  - Users can test the error logging by triggering a test error.

## Environment Variables

- `VITE_PUBLIC_APP_ID` - Your ZAPT app ID.
- `NEON_DB_URL` - Connection URL for the Neon PostgreSQL database.
- `VITE_PUBLIC_SENTRY_DSN` - Your Sentry DSN for error logging.
# Best Earth Facts

Best Earth Facts is an app that allows users to generate and save the most interesting facts about planet Earth. Users can explore, generate, and save fascinating facts, enhancing their knowledge about our planet.

## User Journey

1. **Sign In with ZAPT**
   - The user opens the app and is presented with a sign-in page.
   - The user clicks on "Sign in with ZAPT" and uses their preferred method to sign in (Google, Facebook, Apple, or magic link via email).

2. **Home Page**
   - Upon successful sign-in, the user is redirected to the home page.
   - The home page displays a list of saved Earth facts, if any.

3. **Generate a New Fact**
   - The user clicks on the "Generate Fact" button to create a new Earth fact.
   - The app fetches a new fact about Earth using AI and displays it in an input field.

4. **Save a Fact**
   - The user can review the generated fact and make any edits if desired.
   - The user clicks on the "Save Fact" button to save the fact to their personal collection.

5. **View Saved Facts**
   - The user can scroll through the list of saved facts on the home page.
   - Each fact is displayed with the date it was created.

6. **Additional Features**
   - **Generate Image**
     - The user can generate an image related to Earth by clicking the "Generate Image" button.
     - The generated image is displayed and can be viewed within the app.
   - **Text to Speech**
     - The user can convert a fact into speech by clicking the "Text to Speech" button.
     - An audio player appears, allowing the user to listen to the fact.
   - **Generate Markdown Story**
     - The user can generate a markdown-formatted story about Earth by clicking the "Generate Markdown Story" button.
     - The story is displayed in a readable format within the app.

7. **Sign Out**
   - The user can sign out of the app by clicking the "Sign Out" button in the header.

## External APIs Used

- **OpenAI ChatGPT API (via `chatgpt_request` event)**
  - Used to generate new facts about Earth and markdown stories.
  - Prompts the AI to provide facts or stories in specific formats.

- **OpenAI DALL·E API (via `generate_image` event)**
  - Used to generate images related to Earth based on user prompts.

- **Text-to-Speech API (via `text_to_speech` event)**
  - Converts text facts into speech, providing an audio representation.

## Environment Variables

- `VITE_PUBLIC_APP_ID` - Your ZAPT app ID.
- `NEON_DB_URL` - Connection URL for the Neon PostgreSQL database.

# Laureate

An application that transforms tweets into beautiful images with various gradients and customization options.

## Preview

View it live at https://laureate.netlify.app

![image](https://user-images.githubusercontent.com/108616679/202442178-0e8c8918-626a-4263-888d-d94d64b27968.png)

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Contributing](#contributing)

## Tech Stack

Here is a brief overview of the tech stack I've used in this project.

| Technology   | Description                           | Link ↘️                                           |
| ------------ | ------------------------------------- | ------------------------------------------------- |
| NextJs       | The React Framework                   | https://nextjs.org/                               |
| TypeScript   | JavaScript with types                 | https://www.typescriptlang.org/                   |
| Tailwind CSS | Utility-first CSS framework           | https://tailwindcss.com/                          |
| Zustand      | Bear necessities for state management | https://github.com/pmndrs/zustand                 |
| Twitter api  | For fetching tweet data               | https://developer.twitter.com/en/docs/twitter-api |

## Project Structure

It is a single page app and the entry point is `pages/index.tsx`. In `pages/index.tsx` you'll find that the layout of the app is broken into 4 major components:

1. Header
2. SidePanel
3. TweetCard
4. ExportButton

All these components are located in the `components` folder. Each of those components except `ExportButton` are broken into sub-components in their respective folders.

![laureate-diagram-labeled](https://user-images.githubusercontent.com/108616679/202859779-95e2ae3c-7927-4b48-87ac-c8df193052a6.png)

## Installation

1. [Fork](https://github.com/subhoghoshX/laureate/fork) the project. Click on the fork icon in the top right to get started

2. Clone the project, you can use the following command:

   ```bash
   git clone https://github.com/<your-github-username>/laureate
   ```

3. Navigate to the project directory

   ```bash
   cd laureate
   ```

4. Install dependencies with `yarn install` in both client and server folder

   ```bash
   yarn install
   ```

5. Run `yarn start`

   ```bash
   yarn start
   ```

## Contributing

Any contributions you make are greatly appreciated. Check out our [contribution guidelines](/CONTRIBUTING.md) for more information.

Here are a few things on the roadmap that you can contribute to:

- Feature: A custom color/gradient picker
- Design: Polish the UI (if you're a pro designer definitely contribute)
- Refactor: Rewrite template chooser & the help menu component using Headless UI
- Refactor: Rewrite ExportButton animation using Headless UI Transition component
- Feature: Option to change the font size

**Note:** Please ask before working on anything significant. Always open an issue or discussion first, so that we're all on the same page about the approach you're taking and the tools and technologies you'll be to using.

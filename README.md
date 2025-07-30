# Vue.js Tips

A collection of tips, tricks, and best practices for efficient Vue.js development.

## About

This repository was created and is maintained by **Siméon Azogbonon** to share useful Vue.js tips on various topics such as the Composition API, state management, performance, development tools, and more.

## Repository Structure

Please refer to the branches of this repository.  
Each branch is named according to the topic or tip it provides.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## Project Setup

```sh
pnpm install
```

## Start the Project in Development Mode

```sh
pnpm dev
```

## Build and Minify for Production

```sh
pnpm build
```

## Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

The project will automatically deploy to GitHub Pages when you push to the `main` branch. The deployment is handled by the GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```sh
   pnpm build
   ```

2. Deploy to GitHub Pages:
   ```sh
   pnpm deploy
   ```

### GitHub Pages Settings

Make sure to:
1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Set the source to "GitHub Actions"

The site will be available at: `https://[your-username].github.io/vuejs_tips/`

## Contributing

Contributions are welcome! Feel free to open an issue or pull request to suggest new tips or improve existing ones.

## License

This project is licensed under the MIT License.

---

**Author: Siméon Azogbonon**

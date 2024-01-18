# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React

Link: [Interview-App](https://main--admirable-twilight-7b0d0e.netlify.app/)

# State configuration

In order to handle the asynchronous tasks, I used hooks instead of thunks. There is a useUiState to handle the UI behavior of the app
and a useContentState to handle the information of the data. To add the use of an API we just need to configure the api endpoint and then
trigger all the request inside those hooks.

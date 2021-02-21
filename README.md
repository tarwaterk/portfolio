# Kevin Tarwater Portfolio Website
This repo hosts the code for Kevin Tarwater's personal website. Continuous integration is set up with circleci.io so that any update to the `main` branch will result in an auto-deploy to a DigitalOcean server hosting kevinttarwater.com.

## Structure
This website is built on the foundation of [create-react-app](https://create-react-app.dev/docs/documentation-intro) utitilizing its built in typescript, webpack, and testing functionality. React components are contained within their own directories at the root level of `src` and those directories contain the `tsx`, `css`, and `spec` files for that component. Sometimes components are grouped together under their own directory because of their singular use for a larger component used elsewhere, such as `designPicker`.


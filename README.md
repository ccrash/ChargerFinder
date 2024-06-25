#  Charger Finder
> A simple app to find an EV charger near you

# Setup a local development environment

* Clone the repository in you favorite folder.
* If you don't have an Open Charger API key, register an account and create a new one at https://openchargemap.org/
* Edit the file in (src/settings/keys.ts) to contain your Open Charger API key

```js
export const OpenChargeApiKey = "Insert your personal API Key here"
```

* If you don't have Yarn installed, install it with with: `brew install yarn`
* Run `yarn install` to install all the dependencies
* Run `npx expo start ` to run the application

# IF i had more time I would
* Integrate a state management (Redux, etc.) to manage the internal data and save the app's state
* Cache retrived data and history to be available also offline
* Implement tests to ensure every component is working correctly
* Improve the layout and define classes/alias to keep the design persistent
* Add safe-area-view to prevent undesired interactions
* Encode the key file so that it's not readable decompiling the final app 

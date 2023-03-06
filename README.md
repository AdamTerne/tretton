## Code challenge

This web app is built with react. It uses the design library Tailwind. E2E Testing is done with Cypress.
The web app is hosted on Vercel and is automatically updated on each code update on main branch.

_To run_
Visit https://tretton-aw3n.vercel.app/ or clone repo and run `npm i` followed by `npm start`.

To run tests clone repo and run `npx cypress run` to run it in CLI or `npx run cypress` to run it in browser.

_Notes/Improvements_

- The pagination should be refactored and extracted - It should be a component that can be re used.
- Documentation should be added, either as comments in code or a separate document explaining the code.
- Employees component could be refactored and some logic could be extraced. It handles a bit to much at the moment.
- Working with tailwind in such a small project seems in retrospect a bit excessive and not really worth it. If I had used tailwind components as well it would have made more sense. If I were to re do this I would have used a design library where I can make use of pre made components, eg material ui, mainly for time saving and project scalability.
- Handle loading of big images - Display image first when the image is loaded.
- The UX and styling could be updated to be more unified, eg not using standard html inputs.
- If I had more time I would configure the vercel ci/cd to run tests before deploying.
- An icon library could be added for icon links to external pages.
- Further mobile support should be added - eg making sure favicons looks good on android and ios.

This was a fun challenge! I would have liked to implement more user stories though but there was no time.

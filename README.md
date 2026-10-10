# EMSTRAP

The EMSTRAP website source is maintained in the existing GitHub repository [`naaneshwarn/Emstrap`](https://github.com/naaneshwarn/Emstrap). Updates to the `main` branch preserve the repository's existing history and may trigger its configured Vercel deployment.

## Development

Install dependencies and start the development server:

```sh
npm ci
npm run dev
```

Create a production build and run the test suite:

```sh
npm run build
npm test
```

## Pages

- `/` Homepage
- `/corporate-companies`
- `/smart-cities`
- `/government-agencies`
- `/ambulance-providers`
- `/traffic-management`
- `/police-departments`

Images live in `public/images/` (card, banner and hero photos) and `src/assets/` (homepage feature circles).

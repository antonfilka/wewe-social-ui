This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Components Structure

All components that are reused in multiple places a stored in `./components` folder

All common components like Buttons, Typography, Select, etc.. stored at `./components/common`

Each Common component may have a number of variations, for example `./components/common/Buttons/FormButton` and `./components/common/Buttons/ChatButton` - it comes handy when we need to use the same component with different state behaviors or complex style differences

## Deployed on Vercel

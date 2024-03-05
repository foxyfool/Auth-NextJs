
Key Features:

Next.js 14 with server actions

Credentials Provider

OAuth Provider (Social login with Google & GitHub)

Forgot password functionality

Email verification

Two factor verification

User roles (Admin & User)

Change email with new verification in Settings page

### Prerequisites

**Node version 18.7.x**

### Setup .env file


```js
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=
```

### Setup Prisma
```shell
npx prisma generate
npx prisma db push
```

# 🍮 Caramel

Seamlessly monetize open-source packages, powered by [CandyPay](https://candypay.fun)

## How it works?

All the packages must be privately hosted on [Github Packages](https://github.com/features/packages). The user can purchase the package via CandyPay Checkout.

After the payment is successfully done, the user will get a private link via which the package can be installed and an auth token which must be stored in the `.npmrc` file.

```json
{
  "dependencies": {
    "@candypay/sdk": "https://packages.candypay.fun/api/tarball?data=..."
  }
}
```

When the user installs the package via `npm` (or `yarn`/`pnpm`), a `GET` request is sent to the serverless function. The serverless function will perform the following validations:
1. Is the `package_id` valid?
2. Is the `session_id` valid?
3. Is the status for the session successful i.e the user successfully paid for the package
4. Is the auth token passed in the headers valid?

If all the validation checks passes then it returns the tarball URL for the package via which the package manager can install the package into the user's local machine.


## Setup 

### Environment variables

6 environment variables are needed:
- `CANDYPAY_PRIVATE_API_KEY`
- `NEXT_PUBLIC_CANDYPAY_API_KEY`
- `GITHUB_TOKEN`: Personal access token with `read:packages` and `write:packages` scope
- `GITHUB_USER_OR_ORG`: Username or name of the GitHub organization
- `JWT_SECRET`: Secret used to sign JWT payload. Use the following command to create a secure JWT secret:

    ```bash
    node -e "console.log(crypto.randomBytes(48).toString('base64'))
    ```
    
- `DATABASE_URL`: Postgres database which is used to store the hashed version of the auth tokens (via which the user can install the package). Use [Railway](https://railway.app) to spin up a postgres database in seconds.

### Publishing package to GitHub packages

1. Open your `~/.npmrc` (the global NPM config) and add the following file:
    ```
    //npm.pkg.github.com/:_authToken=[GITHUB_TOKEN]
    ```
    Replace [GITHUB_TOKEN] with the token you generated in the previous step.
2. Update the `package.json` file as follows:
    - Set the `name` to `@username-or-org/package-name`
    - The `repository` must be the package name and the user or organization name will be the scope.
    - The `publishConfig` must point to the GitHub's NPM registry

    ```json
    {
      "name": "@candypay/sdk",
      "repository": "https://github.com/candypay/sdk",
      "publishConfig": {
        "registry": "https://npm.pkg.github.com"
      }
    }
    ```
3. Publish the package to GitHub's NPM registry via `npm publish` command

### Adding packages

1. Click on "Use this template" button to create a copy of the template on your GitHub account
2. Open `src/lib/constants/packages.ts` file

```ts
import { IPackage } from "@/typings/package";

const packages: Record<string, IPackage> = {
  "package-id": {
    package_name: "@username-or-org/package-name",
    is_demo: true, // or false
    price: 1, // price in USD
    image: "logo-of-the-library",
  },
};

export { packages };
```

  The `key` of the record is `package-id` which is an UUID and the value is an object of type `IPackage`.

  - `package-name`: It refers to the name of the package on GitHub's NPM registry
  - `is_demo`: A boolean which decides whether it is demo package or not
  - `price`: Price of the package in USD
  - `image`: URL of the package's logo 

### Deploying

Connect the application to Vercel and deploy it. Set the required environment variables and you're off!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcandypay%2Fcaramel&env=CANDYPAY_PRIVATE_API_KEY,NEXT_PUBLIC_CANDYPAY_API_KEY,GITHUB_TOKEN,GITHUB_USER_OR_ORG,JWT_SECRET,DATABASE_URL)

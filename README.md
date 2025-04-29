# Party-n-Play

A modern web application project using a monorepo structure with Turborepo.

## 🚀 Tech Stack

- **Package Manager:** [pnpm](https://pnpm.io/) (v10.6.2)
- **Build System:** [Turborepo](https://turbo.build/)
- **Node.js:** >=20
- **TypeScript:** For type safety
- **ESLint:** For code linting
- **Prettier:** For code formatting

## 📦 Project Structure

```
party-n-play/
├── apps/          # Application code
├── packages/      # Shared packages
│   ├── eslint/    # ESLint configuration
│   ├── tsconfig/  # TypeScript configuration
│   └── prettier/  # Prettier configuration
└── ...
```

## 🛠️ Prerequisites

- Node.js >=20
- pnpm >=10.6.2

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd party-n-play
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Build the project**
   ```bash
   pnpm build
   ```

4. **Install Git Hooks**
   ```bash
   # Run the script
   ./editor/setup-git-hooks.sh
   ```
   This will install git hooks for conventional commits and set up the proper git hooks path.

## 📝 Available Scripts

- `pnpm build` - Build all applications and packages
- `pnpm type-check` - Run TypeScript type checking
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm prettier` - Check code formatting
- `pnpm prettier:fix` - Fix code formatting
- `pnpm test` - Run tests

## 🔧 Development

The project uses a monorepo structure managed by Turborepo. Each application and package can be developed independently while sharing common configurations and utilities.

### Code Quality

- ESLint is configured for code linting
- Prettier is used for consistent code formatting
- TypeScript ensures type safety across the project

### Git Hooks

The project uses a custom git hook script to enforce conventional commits and set up the proper git hooks path.
Commit examples:

```bash
git commit -m "feat(captcha-solver): add captcha solver (#1)"
git commit -m "fix(captcha-solver): fix captcha solver (#2)"
git commit -m "refactor(captcha-solver): refactor captcha solver (#3)"
```

## 📄 License

This project is licensed under the MIT License.

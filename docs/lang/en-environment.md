# Environment Variables and Configuration File Management

[日本語](../develompent/environment.md) | English

Management of environment variables and configuration files for the project

## Overview

- Using environment variables to manage API keys and configuration values
- Providing mechanisms to ensure type safety and optimize security

## List of Environment Variables

### Required Environment Variables

| Variable Name  | Description                    | Example                          |
| -------------- | ------------------------------ | -------------------------------- |
| `BASE_API_URL` | API Base URL                   | `https://qiita.com/api/v2/items` |
| `QIITA_TOKEN`  | Qiita API Authentication Token | `your_qiita_token_here`          |

## Setup Instructions

### 1. Create Environment Variable File

```bash
# Copy the environment variable file example
cp env.example .env.local
```

### 2. Configure Environment Variables

Open the `.env.local` file and set the required values

```bash
# Set API base URL
BASE_API_URL=https://qiita.com/api/v2/authenticated_user/items
# Set Qiita API authentication token
QIITA_TOKEN=your_actual_qiita_token_here
```

### 3. Obtain Qiita API Token

1. Log in to [Qiita](https://qiita.com)
2. Access [Settings > Applications](https://qiita.com/settings/applications)
3. Click "Personal Access Token"
4. Enter token name and select scope
5. Copy the generated token and set it in `.env.local`

## Ensuring Type Safety

### Environment Variable Type Definitions

`src/types/env.types.ts` provides environment variable type definitions:

```typescript
export interface EnvironmentVariables {
  /** API Base URL */
  BASE_API_URL: string;
  /** Qiita API Authentication Token */
  QIITA_TOKEN: string;
}
```

### Environment Variable Validation and Retrieval

- After executing the `validateEnvironment` function, retrieve environment variables using the `getRequiredEnvVariable` function

`src/utils/env.utils.ts` provides environment variable validation and retrieval functionality:

```typescript
import { validateEnvironment, getRequiredEnvVariable } from "@/utils/env.utils";

// Bulk validation of environment variables
validateEnvironment();

// Type-safe retrieval of environment variables
const qiitaToken = getRequiredEnvVariable("QIITA_TOKEN");
const baseUrl = getRequiredEnvVariable("BASE_API_URL");
```

### Usage Examples

```typescript
// ❌ Not recommended: Direct use of process.env
const token = process.env.QIITA_TOKEN; // string | undefined

// ✅ Recommended: Type-safe retrieval
const token = getRequiredEnvVariable("QIITA_TOKEN"); // string
```

### Usage Example in API Routes

```typescript
// src/app/api/qiita/route.ts
import { validateEnvironment, getRequiredEnvVariable } from "@/utils/env.utils";

export async function GET() {
  try {
    // Validate environment variables
    validateEnvironment();

    // Type-safe retrieval of environment variables
    const qiitaToken = getRequiredEnvVariable("QIITA_TOKEN");
    const baseApiUrl = getRequiredEnvVariable("BASE_API_URL");

    const res = await fetch(baseApiUrl, {
      headers: {
        Authorization: `Bearer ${qiitaToken}`,
      },
    });

    // ...
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```

## Security Configuration

### 1. Exclude Environment Variable Files

The following files are excluded in `.gitignore`:

```gitignore
# Environment configuration files
.env.*
.env.local
.env.production
.env.development
```

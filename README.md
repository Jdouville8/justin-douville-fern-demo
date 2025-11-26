# The Green Room API Documentation

Welcome to The Green Room API documentation repository! This repository contains the complete documentation site and SDK generation configuration for The Green Room Plant Store API.

## Overview

The Green Room is a comprehensive plant marketplace API that allows you to manage your plant inventory, search for plants by various criteria, and handle user operations. This repository uses [Fern](https://buildwithfern.com) to generate beautiful documentation and SDKs in multiple programming languages.

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install the Fern CLI globally:

```bash
npm install -g fern-api
```

2. Clone this repository:

```bash
git clone <your-repo-url>
cd archive-docs
```

### Generate Documentation [VERY IMPORTANT NOTE]

To generate and preview the documentation locally:

```bash
fern generate --docs --preview
```
There was an issue introduced after changing the organization name later in the process of development.

Instead of https://justin-douville.docs.buildwithfern.com, the documentation will be available at the provided preview link where it still runs safely

### Generate SDKs

To generate all SDKs (TypeScript, Python, Java, Go):

```bash
fern generate
```

To generate a specific SDK:

```bash
fern generate --group ts-sdk      # TypeScript only
fern generate --group python-sdk  # Python only
fern generate --group java-sdk    # Java only
fern generate --group go-sdk      # Go only
```

Generated SDKs will be placed in the `sdks/` directory.

## Repository Structure

```
archive-docs/
├── fern/
│   ├── openapi/
│   │   └── api.yml              # OpenAPI specification
│   ├── pages/
│   │   ├── the-plant-store.mdx  # Landing page
│   │   └── getting-started.mdx  # Getting started guide
│   ├── assets/                  # Images and icons
│   ├── docs.yml                 # Documentation configuration
│   ├── generators.yml           # SDK generation configuration
│   ├── styles.css               # Global styles
│   ├── overview-styles.css      # Page-specific styles
│   └── custom.js                # Custom JavaScript
├── sdks/
│   ├── typescript/              # Generated TypeScript SDK
│   ├── python/                  # Generated Python SDK
│   ├── java/                    # Generated Java SDK
│   └── go/                      # Generated Go SDK
└── README.md
```

## Features

### Documentation

- **Interactive API Reference**: Auto-generated from OpenAPI specification
- **Multi-language SDK Examples**: Code snippets in TypeScript, Python, Java, and Go
- **Custom Styling**: Branded color scheme and typography using Varela Round font
- **Interactive Components**: Hover tooltips showcasing different plant varieties
- **Floating Action Button**: Quick access to the Plant Store website

### SDKs

SDKs are automatically generated in four languages:

- **TypeScript** (v3.34.0)
- **Python** (v4.41.1)
- **Java** (v3.20.0)
- **Go** (v1.18.3)

All SDKs include:
- Type-safe API clients
- Comprehensive error handling
- Built-in retry logic
- Request/response logging

## API Endpoints

The Green Room API provides the following core functionality:

- **Plant Management**
  - `POST /plant` - Add a new plant
  - `PUT /plant` - Update an existing plant
  - `GET /plant/{plantId}` - Get plant by ID
  - `GET /plant/search/status` - Search plants by status
  - `GET /plant/search/tags` - Search plants by tags

- **User Management**
  - User authentication and profile management

## Customization

### Updating Styles

- Edit `fern/styles.css` for global styles
- Edit `fern/overview-styles.css` for page-specific styles
- Modify color scheme in `fern/docs.yml` under the `colors` section

### Adding Content

- Add new documentation pages in `fern/pages/`
- Update navigation in `fern/docs.yml`
- Add assets to `fern/assets/`

### Modifying the API

- Update the OpenAPI specification in `fern/openapi/api.yml`
- Run `fern generate` to regenerate SDKs and documentation

## Development Workflow

1. Make changes to documentation or API specification
2. Run `fern generate --docs` to preview changes locally
3. Review the generated documentation
4. Commit and push changes to GitHub
5. Fern automatically deploys the updated documentation

## Support

For questions or issues:

- Visit the [Fern Documentation](https://docs.buildwithfern.com)
- Check the [Fern GitHub](https://github.com/fern-api/fern)
- Review the [OpenAPI Specification](https://swagger.io/specification/)

## License

This project is configured for The Green Room Plant Store API documentation and SDK generation.

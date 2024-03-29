---
date: 2023-11-06
title: ERPNext-Projects-Plus installation guide
category: Tutorial
author: Jeel Rupapara
description: This guide is for guidance to install ERPNext-Projects-Plus
tags:
- ERPNEXT
- ERPNext-Projects-Plus

og_title: Blog | ERPNext-Projects-Plus installation guide
---
<PostDetail>


## ERPNext-Projects-Plus

Integrate ERPNext projects seamlessly with GitHub for a smarter project management experience.

## Key Features 

1. **GitHub Organization Webhook Management:**
   - Create and manage GitHub organization webhooks directly from ERPNext.
2. **Task and GitHub Integration:**
   - Easily manage ERP tasks alongside GitHub commits and pull requests using task keys for streamlined coordination and improved project oversight.

   
## Prerequisites

Before getting started, make sure you have the following prerequisites installed on your system:

- Python 3.10
- Docker
- docker-compose

## Installation - Way 1

1. Clone the repository to your local system.
2. Start the database and Redis using the following command:
   ```bash
   docker-compose up
   ```
3. Create and activate a virtual environment:
   ```bash
   python3 -m venv .python
   source .python/bin/activate
   ```
4. To deactivate the virtual environment, run:
   ```bash
   deactivate
   ```

### Pre-commit Hooks

Before making changes, install pre-commit using:
   ```bash
   pip install pre-commit
   ```
   Run the following command in the project root:
   ```bash
   pre-commit install
   ```

### Install Bench

Install Frappe Bench using:
   ```bash
   pip3 install frappe-bench
   ```

### Initial Setup

1. Go to https://smee.io/new and copy the smee.io Webhook Proxy URL.
2. Export the Webhook Proxy URL to your system:
   ```bash
   export WEBHOOK_PROXY_URL="smee_proxy_url"
   ```
3. Run the following bench setup commands:
   ```bash
   PYENV_VERSION=3.10.5 bench init --skip-redis-config-generation --frappe-branch version-14 frappe-bench
   cd frappe-bench
   source env/bin/activate
   bench set-config -g redis_cache redis://localhost:6379
   bench set-config -g redis_queue redis://localhost:6380
   bench set-config -g redis_socketio redis://localhost:6381
   bench set-config -g developer_mode 1
   bench set-config -g webhook_proxy_url $WEBHOOK_PROXY_URL
   bench new-site ims.localhost --no-mariadb-socket
   bench use ims.localhost
   bench get-app erpnext
   bench get-app erpnext_projects_plus git@github.com:Improwised/ERPNext-projects-plus.git
   bench --site ims.localhost install-app erpnext
   bench --site ims.localhost install-app erpnext_projects_plus
   bench start
   ```

4. Start the smee server:
   ```bash
   npm install -g smee-client
   smee --url $WEBHOOK_PROXY_URL --port 8000 --path /api/method/erpnext_projects_plus.modules.github.webhook_parsing.listen_webhook
   ```

## Installation - Way 2

1. Install [VS code dev container extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) and VS Code.
2. Set up the webhook proxy for GitHub webhook:
   - Go to https://smee.io/new and copy the smee.io Webhook Proxy URL.
   - Set the URL into the `.devcontainer/.env.develop` file.
   - Run the following command:
     ```bash
     cp .env.develop .env
     ```
3. Open VS Code and click on "Reopen in container" when prompted at the bottom right corner.
4. In the VS Code terminal (inside the container), run the following commands:
   ```bash
   bench new-site epp.localhost --admin-password erpnext --mariadb-root-password erpnext --no-mariadb-socket --force
   bench use epp.localhost
   bench --site epp.localhost install-app erpnext erpnext_projects_plus
   bench start
   ```

## License
```
MIT
```
</PostDetail>

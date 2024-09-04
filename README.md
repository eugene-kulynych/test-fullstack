# Test task

## Overview

Brief description of what the project does and its purpose.

## How to Run the Project

1. **Pull this repo to your computer**

1.1 **Set Environment Variables**

   Create a `.env` file in the root directory of the project and set the required environment variables. Make sure to provide all necessary configuration values.

2. **Start the Project locally**

   In the root folder, run the following command to build and start the Docker containers:
   ```bash
   docker compose up --build
3. **Open browser**

   Hit `http://localhost:3000` and start exploring the app
## How to Stop the Project

1. **Stop the Containers**

   In the root folder, run the following command to stop the Docker containers:
   ```bash
   docker compose down
   ```
   If you want to remove Docker volumes and orphans, run:
   ```bash
   docker compose down --volumes --remove-orphans
    ```

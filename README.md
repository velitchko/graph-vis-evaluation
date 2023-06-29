# Graph Evaluation

Dependencies Required: NodeJS, Angular

Please install NodeJS from https://nodejs.org/en

Then following open a terminal and install the Angular CLI by executing the following command:


```bash
npm install -g @angular/cli
```

Running the projects:

graph-evaluation-two contains a web application with the different network structural and temporal encoding techniques built using angular and d3.js
graph-evaluation-two-survey contains the SurveyJS implementation that embeds views from the graph-evaluation-two project in iFrames.

Both need to run at the same time (use 2 terminal tabs for this).

Step 1: Navigate to the project directories


```bash
cd ./<graph-evaluation-two, graph-evaluation-two-survey>
```

Step 2: Install all the necessary dependencies for both projects


```bash
npm install
```

Step 3: Launch both web applications

(builds the application and starts the webserver)

```bash
npm run build && npm run start
```

or 

(runs the application in development mode)
```bash
npm run dev
```

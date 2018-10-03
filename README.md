# Test-Task-React
Test task. Create a simple CMS like application using: react, react-router and webpack.

## Project Setup
- Run: `npm instal`
- Production build: `npm run build`
- Start dev server: `npm run start`

### Configuration
Application uses json-server for handling data. For correct json-server working file tabs.json changed from array to object and looks like this:

{
 "tabs": [
   {"id": "dummyTable", "title": "Dummy Table", "order": 1, "path": "tabs/dummyTable.js"},
   {"id": "dummyChart", "title": "Dummy Chart", "order": 2, "path": "tabs/dummyChart.js"},
   {"id": "dummyList", "title": "Dummy List", "order": 0, "path": "tabs/dummyList.js"}
 ]
}

insted of initial state:

[
   {"id": "dummyTable", "title": "Dummy Table", "order": 1, "path": "tabs/dummyTable.js"},
   {"id": "dummyChart", "title": "Dummy Chart", "order": 2, "path": "tabs/dummyChart.js"},
   {"id": "dummyList", "title": "Dummy List", "order": 0, "path": "tabs/dummyList.js"}
 ]
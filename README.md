for running application

1. clone project.
2. yarn install
3. yarn start



USAGE
There is fields array in index.js file. You can add here which fields you want to filter for missing.
for example:

fields = [
  "shortName",
  "agentIDInfluencer"
]
the example shown above will filter only two fields(shortName, agentIDInfluencer)


You can also add some query params to locationParams field
for example: 
let locationParams = {
    includeUpcomingLocations: true,
    content:false
}

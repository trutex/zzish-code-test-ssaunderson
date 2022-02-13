# Feature flag test submission - Stuart Saunderson

## Installing and running

To install dependencies for the project run the following from the command line:

```
npm install
```

To start the project run the following from the command line:

```
npm start
```

The server will now be running on localhost at port 3000, exposing a single endpoint of `GET /features`. The endpoint must be supplied with two query parameters of `email` and `location`, representing the user for which we want to retrieve a list of enabled features.

To confirm this you can hit the endpoint in Postman or using `curl` on the command line: eg:

```
curl http://localhost:3000/features?email=ed@zzish.com&location=GB
```

This will return an object with a single `features` property representing an array of features enabled for the specified user - an example response is:

```
{
    "features": [
        {
            "name": "EnhancedDashboardFeature",
            "ratio": 0.5,
            "enabledEmails": [
                "anurag@zzish.com"
            ],
            "includedCountries": [
                "US",
                "CA"
            ],
            "excludedCountries": []
        }
    ]
}
```

## Testing

To run the tests run the following from the command line:

```
npm test
```

## Randomization

In order to randomize the users to assign features to them in a deterministic and consistent way, the following method is used:

* Take the username from the email (i.e. everything up to but not including the '@' symbol)
* Assign each letter in the username a value equal to its 'alphabet index' (i.e. a = 0, z = 25)
* Calculate the average letter value, then divide by 25 to get a score between 0 and 1
* Assign the feature to the user if their score is less that that feature's 'ratio' value

The above method assumes that there will be a suitably random distribution of user names in emails that are supplied to the endpoint.
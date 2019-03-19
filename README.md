# My Card

I started this test using https://codesandbox.io which is an amazing thing I just discovered this week! 
It allows you to have many types of projects already setup, so I went for a React one.

This app is super simple and dummy, as it doesn't reall have much logic. The data is static (i'm only reading it) and this structures is
not scalable at all, but I hope it works as a test.

I've done 2 ways of having responsive content. The PropertyCardSimple card is only one markup and all the responsiveness I do with html & css
while on the PropertyCard I render different content depending on the width of the browser window.

The choice for the breakpoint was really arbitrary

As you can see, I just have a main index.js file that renders the app. I created a ListingPage component just to have a meaningful
wrapper for the cards.

In order to have some "dynamic" data to render the cards I created a simple json file with a couple of listings.





## Development

### Testing with live-server

If you want to test your component within live-server

    yarn build
    yarn watch
    yarn live-server

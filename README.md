# My Card

I started this test using https://codesandbox.io which is an amazing thing I just discovered this week! 
It allows you to have many types of projects already setup, so I went for a React one.

This app is super simple and dummy, as it doesn't really have much logic. The data is static (i'm only reading it) and this structures is
not scalable at all, but I hope it works as a test.

I've done 2 ways of having responsive content. The PropertyCardSimple card is only one markup and all the responsiveness I do with html & css
while on the PropertyCard I render different content depending on the width of the browser window.

The choice for the breakpoint was really arbitrary, making sure property-card__features could fit in the minimum desktop size.
I also set a max-width for the cards list, just for the sake of not having a super wide card.

As you can see, I just have a main index.js file that renders the app. I created a ListingPage component just to have a meaningful
wrapper for the cards.

In order to have some "dynamic" data to render the cards I created a simple json file with a couple of listings.
The StarRating is super static atm, but well done and extracted it can become a very nice component that could be used in any project, a bit like the GlobalRating

As you can see the css is just plain vanilla trying to follow BEM. I did it this way just to not add more dependencies to the test, so there's probably a lot of repetitions and it's definitely not scalable at all, if we need it to be easy for people to develop.
There are so many approaches though to this when you want scalable and maintainable: styled components, different stylesheets for components, using pre-processors or just using post-css, etc... I guess for each project, its needs.


Accessibility wise, I've just done the very basic, trying to have the most semantic layout possible. There's probably lots of things missing like hidden help for screen readers, aria-labels, role attributes, etc...but I couldn't spend all the time I wanted for the test.
In the ProperyCardSimple for example, the h4 which is the property description (or title) is hidden in mobile, and that's not really my favourite thing to do, but it would be nice to have it maybe readable by screen readers, or maybe it may suffice to have it as the alt text for the image.
I would probably do some research on this if I had to do it at work.
In the case of the ProperyCard, I made sure there was always an h4 visible, either as the title or the price.


I haven't done any tests just because I wanted to keep it simple, to be honest, but we could do some unit testing for things like
checking if the data is passed, checking the rendering works, etc...bit hard to find meaningful tests for a dummy component like mine, but once
more developed and more functionality it will definitely benefit from more testing, plus maybe including it in an integration test, etc...


In terms of structure, again I went for something simple. I do personally like the atomic design way (smaller components, components made of components, pages, etc...)
I think, in general, I've used about 6 hours for this test, and I've tried to be as quick as possible, and so very pragmatic.



## Development

If you want to test the app locally

    npm install
    npm run


If you want to test the app with a production build (you'll need to install serve ```npm install -g serve``` )

    npm run build
    npm serve -s build
    
 Once you get the local url or network url, you can test it in diff browsers.
 
    
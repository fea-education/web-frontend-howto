# Historic context of web development

Multi-Page Apps (MPAs) were the earliest architecture used on the web, relying on server-side rendering. As the web evolved, the need for more interactivity and improved user experience led to the transition over Progressively Enhanced Multi-Page Apps (PEMPAs, aka "JavaScript Sprinkles"), which relied on server-side rendering and client-side fetching of HTML (Ajax) to Single Page Apps (SPAs), which separated the UI code from the backend. SPAs only fetch data and render the HTML on the client side. However, SPAs have their own trade-offs, such as slower initial load times and SEO challenges. The next transition in web development architecture is currently underway, aiming to address the limitations of SPAs and MPAs.

_(Source: [Kent C. Dodds - The Web’s Next Transition](https://www.epicweb.dev/the-webs-next-transition))_

## Present

Multiple solutions are in place that promise a compromise between SPAs and MPAs. On a high level a lot of them follow a similar strategy (e.g. SSR + Hydration) and aim to give the developer more control over which parts need to be interactive (and involve the usage of JavaScript) and which don't. Some of these solutions try to leverage the web platform and standards as much as possible, while others chose more custom and proprietary ways.

# Strategies and Architectures and representative Technologies

## (Pure) Server-Side Rendering (SSR)

Server-side rendering (SSR) is a technique in web development where the server generates the complete HTML content of a web page and sends it to the client. This allows the client to receive a fully rendered page, ready to be displayed, without the need for additional client-side rendering. The strengths of SSR include improved [Largest Contentful Paint (LCP)](./goals.md#largest-contentful-paint-lcp), better [search engine optimization (SEO)](https://en.wikipedia.org/wiki/Search_engine_optimization), and enhanced accessibility. However, SSR can be more resource-intensive on the server, may require additional server-side processing, and can limit the interactivity of the web application compared to client-side rendering.

**Representatives**: [Ruby on Rails](https://rubyonrails.org/), [Spring Boot](https://spring.io/projects/spring-boot), [Laravel](https://laravel.com/), [Django](https://www.djangoproject.com/), [ASP.NET](https://www.asp.net/), [Astro](https://astro.build/)

## Client-Side Rendering (CSR)

Client-side rendering is a technique in web development where the rendering of a web page is done on the client's browser using JavaScript. This means that the initial HTML content is sent to the client, and then the browser executes the JavaScript code to render and display the page. The strengths of client-side rendering include enhanced interactivity, dynamic content updates, and the ability to build complex user interfaces. However, it can lead to slower [Largest Contentful Paint (LCP)](./goals.md#largest-contentful-paint-lcp), reduced [search engine optimization (SEO)](https://en.wikipedia.org/wiki/Search_engine_optimization) capabilities, and potential performance issues on lower-powered devices.

**Representatives**: [React](https://react.dev/), [Vue](https://vuejs.org/), [Solid](https://www.solidjs.com/), [Svelte](https://svelte.dev/)

## Hydration (SSR + CSR)

Hydration refers to the process of making a server-rendered website interactive in the browser. It allows the website to become dynamic and respond to user interactions. The strengths of hydration include improved user experience, faster interactivity, and the ability to handle complex user interfaces. However, hydration can also introduce challenges such as increased complexity in development, potential performance issues, and the need for careful management of data serialization and transmission.

**Representatives**: [Next.js](https://nextjs.org/), [Remix](https://remix.run/), [Solid Start](https://start.solidjs.com/), [Sveltekit](https://kit.svelte.dev/), [Qwik](https://qwik.builder.io/)

## Islands Architecture

Islands architecture is an approach that aims to reduce the JavaScript footprint in web applications by explicitly specifying what components should be sent to the client. It allows for selective rendering of components, resulting in smaller bundle sizes and improved performance. The strengths of Islands architecture include reduced JavaScript payload, faster initial page load times, and improved scalability. However, it may introduce added complexity, especially when combined with server components, and requires careful management of state preservation and routing.

**Representaives**: [Astro](https://astro.build/), [HTMX](https://htmx.org/), _Any traditional server-side rendered MPAs, that included JavaScript to fetch HTML content (Ajax) to update the DOM followed this principle years ago_

## Resumability

Resumability is an approach that focuses on reducing the execution cost of [hydration](#hydration-ssr--csr) in web applications. Instead of trying to [minimize the amount of code that is hydrated](#islands-architecture), resumability aims to remove the overhead of hydration itself. Its strengths lie in reducing the execution cost of hydration, improving performance, and allowing for more efficient use of resources. However, resumability may introduce complexity, especially when combined with other architectural approaches, and requires careful management of state and data serialization.

**Representative**: [Qwik](https://qwik.builder.io/)

## React Server Components

**Rendering in the context of React Server Components doesn't mean producing HTML or manipulating the DOM, but generating the [React Server Component Payload](https://www.plasmic.app/blog/how-react-server-components-work#2-server-serializes-root-component-element-to-json) that is used by React in the [Browser to render all (server & client) components](https://www.plasmic.app/blog/how-react-server-components-work#3-browser-reconstructs-the-react-tree).**

[React Server Components](https://www.joshwcomeau.com/react/server-components/) are a feature in React that allow for partial rendering of components on the server. This means that only the necessary parts of a component are rendered on the server and sent to the client, reducing the amount of data that needs to be downloaded. The strengths of React Server Components include improved performance by reducing the payload size, better server-side rendering capabilities, and the ability to handle components with large dependencies. However, it may introduce added complexity to the development process and requires careful management of state and data synchronization between the server and client.

## Sources

- https://dev.to/this-is-learning/islands-server-components-resumability-oh-my-319d
- https://www.epicweb.dev/the-webs-next-transition
- https://www.joshwcomeau.com/react/server-components/
- https://www.plasmic.app/blog/how-react-server-components-work

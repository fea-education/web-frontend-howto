# Main goals that strategies and technologies should achieve

The most relevant achievements that should be looked at, are the user satisfaction and the production cost.

The production cost can be split into labour cost (business, legal, marketing, ux, ui, development, qa, operations and probably many more) and other costs (hardware, software, licenses and many more). The user satisfaction is tied to the performace, correctness, availability, security, usability and a bunch of psychological influences that I don't know enough of to write about.

To evaluate strategies and tools to build frontends for web applications, this deep dive will focus on the labour cost of development and the performance and usability of the product. With the exception of security, most other costs and causes for user satisfaction are not very strongly influenced by the choice of frontend application tooling.

To make solutions comparable, we will take specific measurements, more subjective evaluations and turn them into ratings on a scale of 1 (very bad) to 10 (very good).

## Development cost

The development cost is directly related to the time spent on a specific iteration of the product. So whichever solution supports the team the most in building and mainting the product, will be the most cost effective one. The time will be influenced by...

- **Setup Time**: Measure the time taken to set up a new project with each framework
- **Developer Productivity**: Evaluate the ease of development, availability of documentation, and community support
- **Maintainability**: Assess how easy it is to add new features and refactor existing code
  - **Consistency**: Evaluate adherence to coding standards and best practices
  - **Testability**: Measure the ease of writing unit tests and integration tests for the codebase
  - **Complexity**
    - **Code Complexity**: Use tools like cyclomatic complexity to measure the complexity of the codebase
    - **Architecture Complexity**: Evaluate the complexity of the chosen architecture
    - **Dependency Management**: Assess the complexity of managing dependencies and version compatibility
    - **Tooling Complexity**: Measure the complexity of tooling required for development, testing, and deployment

We won't look at all of these measurements in detail and might only add them to the mix once we realised that indeed there are significant differences between the solutions. The focus will be on **Developer Productivity** and **Maintainability** via **Complexity** and **Testability**.

## Performance

While improving the performance can be a cost cutting operation, we'll look at it from the perspective of user satisfaction. Which means only metrics that influence the user experience directly will be looked at.

### Largest Contentful Paint (LCP)

Measures the time it takes for the largest content element (e.g., image, text block) within the viewport to become visible to the user

### Cumulative Layout Shift (CLS)

Measures the cumulative sum of all individual layout shift scores that occur during the entire lifespan of the page

### First Input Delay (FID)

Measures the delay between the time when a user interacts with a page (e.g., clicks a button, taps on a link) and the time when the browser responds to that interaction

### Size of Network resources

### Network request waterfall flatness

Measures the number of requests that will be initiated once preceding requests were completed

### Research

- DOMContentLoaded
- Google Crux
- Preloading images
- webpagetest.org
- Next.js traces
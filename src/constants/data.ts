export const data = {
  by: 'cschiller',
  descendants: 40,
  id: 41924787,
  kids: [41925521, 41926270, 41926351, 41925110, 41926071, 41925129, 41925881, 41925417, 41925703, 41925832],
  score: 55,
  text: 'Hey HN, we are Chris and Chris from MobileBoost (<a href="https:&#x2F;&#x2F;mobileboost.io&#x2F;">https:&#x2F;&#x2F;mobileboost.io&#x2F;</a>). We’re building GPT Driver, an AI-native approach to create and execute end-to-end (E2E) tests on mobile applications. Our solution allows teams to define tests in natural language and prevents test flakiness by taking a visual approach paired with LLM (Large Language Model) reasoning. This helps achieve E2E test coverage with a fraction of the usual effort.<p>You can watch a brief product walkthrough here: <a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=5-Ge2fqdlxc" rel="nofollow">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=5-Ge2fqdlxc</a><p>In terms of trying the product out: since the service is resource-intensive (we provide hosted virtual&#x2F;real phone instances), we don&#x27;t currently have a playground available. However, you can see some examples here <a href="https:&#x2F;&#x2F;mobileboost.io&#x2F;showcases">https:&#x2F;&#x2F;mobileboost.io&#x2F;showcases</a> and book a demo of GPT Driver testing your app through our website.<p>Why we built this: working at previous startups and scaleups, we saw how as app teams grew, QA teams would struggle to ensure everything was still working. This caused tension between teams and resulted in bugs making it into production.<p>You’d expect automated tests to help, but these were a huge effort because only engineers could create the tests, and the apps themselves kept changing—breaking the tests regularly and leading to high maintenance overhead. Functional tests often failed not because of actual app errors, but due to changes like copy updates or modifications to element IDs. This was already a challenge, even before considering the added complexities of multiple platforms, different environments, multilingual UIs, marketing popups, A&#x2F;B tests, or minor UI changes from third-party authentication or payment providers.<p>We realized that combining computer vision with LLM reasoning could solve the common flakiness issues in E2E testing. So, we launched GPT Driver—a no-code editor paired with a hosted emulator&#x2F;simulator service that allows teams to set up test automation efficiently. Our visual + LLM reasoning test execution reduces false alarms, enabling teams to integrate their E2E tests into their CI&#x2F;CD pipelines without getting blocked.\nSome interesting technical challenges we faced along the way:\n(1) UI Object Detection from Vision Input: We had to train object detection models (YOLO and Faster R-CNN based) on a subset of the RICO dataset as well as our own dataset to be able to interact accurately with the UI. \n(2) Reasoning with Current LLMs: We have to shorten instructions, action history, and screen content during runtime for better results, as handling large amounts of input tokens remains a challenge. We also work with reasoning templates to achieve robust decision-making. \n(3) Performance Optimization: We optimized our agentic loop to make decisions in less than 4 seconds. To reduce this further, we implemented caching mechanisms and offer a command-first approach, where our AI agent only takes over when the command fails.<p>Since launching GPT Driver, we’ve seen adoption by technical teams, both with and without dedicated QA roles. Compared to code-based tests, the core benefit is the reduction of both the manual work and the time required to maintain effective E2E tests. This approach is particularly powerful for apps which have a lot of dynamic screens and content such as Duolingo which we have been working with since a couple of months. Additionally, the tests can now also be managed by non-engineers.<p>We’d love to hear about your experiences with E2E test automation—what approaches have worked or didn’t work for you? What features would you find valuable?',
  time: 1729689497,
  title: 'Launch HN: GPT Driver (YC S21) – End-to-end app testing in natural language',
  type: 'story',
};

export const comments11 = {
  by: 'msoad',
  id: 41925521,
  kids: [41926022, 41926615, 41926782, 41926862, 41926648, 41925985, 41925784],
  parent: 41924787,
  text: 'I work in this space. We manage thousands of e2e tests. The pain has never been in writing the tests. Frameworks like Playwright are great at the UX. And having code editors like Cursor makes it even easier to write the tests. Now, if I could show Cursor the browser, it would be even better, but that doesn’t work today since most multimodal models are too slow to understand screenshots.<p>It used to be that the frontend was very fragile. XVFB, Selenium, ChromeDriver, etc., used to be the cause of pain, but recently the frontend frameworks and browser automation have been solid. Headless Chrome hardly lets us down.<p>The biggest pain in e2e testing is that tests fail for reasons that are hard to understand and debug. This is a very, very difficult thing to automate and requires AGI-level intelligence to really build a system that can go read the logs of some random service deep in our service mesh to understand why an e2e test fails. When an e2e test flakes, in a lot of cases we ignore it. I have been in other orgs where this is the case too. I wish there was a system that would follow up and generate a report that says, “This e2e test failed because service XYZ had a null pointer exception in this line,” but that doesn’t exist today. In most of the companies I’ve been at, we had complex enough infra that the error message never makes it to the frontend so we can see it in the logs. OpenTelemetry and other tools are promising, but again, I’ve never seen good enough infra that puts that all together.<p>Writing tests is not a pain point worth buying a solution for, in my case.<p>My 2c. Hopefully it’s helpful and not too cynical.',
  time: 1729694523,
  type: 'comment',
};

export const comments12 = {
  by: 'hn_throwaway_99',
  id: 41926022,
  kids: [41926926, 41926227],
  parent: 41925521,
  text: 'While I agree with your primary pain point, I would argue that that really isn&#x27;t specific to tests at all. It sounds like what you&#x27;re really saying is that when something goes wrong, it&#x27;s really difficult to determine which component in a complex system is responsible. I mean, from what you&#x27;ve described (and from what I&#x27;ve experienced as well), you would have the same if not harder problem if a user experienced a bug on the front end and then you had to find the root cause.<p>That is, I don&#x27;t think a framework focused on front end testing should really be where the solution for your problem is implemented. You say &quot;This is a very, very difficult thing to automate and requires AGI-level intelligence to really build a system that can go read the logs of some random service deep in our service mesh to understand why an e2e test fails.&quot; - I would argue what you really need is better log aggregation and system tracing. And I&#x27;m not saying this to be snarky (at scale with a bunch of different teams managing different components I&#x27;ve seen that it can be difficult to get everyone on the same aggregation&#x2F;tracing framework and practices), but that&#x27;s where I&#x27;d focus, as you&#x27;ll get the dividends not only in testing but in runtime observability as well.',
  time: 1729697227,
  type: 'comment',
};

export const comments13 = {
  by: 'krainboltgreene',
  id: 41926926,
  parent: 41926022,
  text: '&quot;OpenTelemetry and other tools are promising, but again, I’ve never seen good enough infra that puts that all together.&quot;<p>It&#x27;s a two paragraph comment and you somehow missed it.',
  time: 1729702596,
  type: 'comment',
};

export const comments21 = {
  by: 'batikha',
  id: 41926270,
  kids: [41926838],
  parent: 41924787,
  text: 'Very cool! I already can see a lot of &quot;this is already solved by playwright&#x2F;cypress&#x2F;selenium&#x2F;deterministic stuff&quot; in the comments.<p>Over nearly 10 years in startups (big and small), I&#x27;ve been consistently surprised by how much I hear that &quot;testing has been solved&quot;, yet I see very little automation in place and PMs&#x2F;QAs&#x2F;devs and sometimes CEOs and VPs doing lots of manual QA. And not only on new features (which is a good thing), also on happy path &#x2F; core features (arguably a waste of time to test things over and over again).<p>More than once I worked for a company that was against having a manual QA team, out of principle and more or less valid reasons (we use a typed language so less bug, engineers are empowered, etc etc), but ended up hiring external consultants to handle QA after a big quality incident.<p>The amount of mismatch between theory and practice in this field is impressive.',
  time: 1729698599,
  type: 'comment',
};

export const comments22 = {
  by: 'cschiller',
  id: 41926838,
  parent: 41926270,
  text: 'Thanks for sharing your experience! Completely agree - there&#x27;s often a huge gap between the perception that testing is &quot;solved&quot; and the reality of manual QA still being necessary, even for core features. We recently had a call with one of the largest US mobile teams and were surprised to learn they&#x27;re still doing extensive manual testing because some use cases remain uncovered by traditional tools. It&#x27;s definitely not as &quot;solved&quot; as many might think.',
  time: 1729702200,
  type: 'comment',
};


Preact - Performance Optimization by default

A few months ago, I wrote an  [article based on optimizing react loading time](https://dev.to/nilanth/how-to-reduce-react-app-loading-time-by-70-1kmm), and most of the reader's comments were to try  [Preact](https://preactjs.com/)  to get default optimization. So I decided to try preact with the same app used for the previous article. Let's first get an intro about Preact.

Preact is a React alternative library with all the react features!.. Preact is a  **3KB**  library. It is very small compared to react, as react and react-dom gzip size is around  **41KB**  excluding react-scripts based on  [bundlephobia](https://bundlephobia.com/). Some highlighted features of preact are

1.  Lightweight Virtual Dom
2.  Small in Size
3.  Performance optimized by default
4.  Integration is simple
5.  PWA by default

Now let's see preact in action.

I have developed the same app in React and Preact to test the app performance.

[![React](https://res.cloudinary.com/practicaldev/image/fetch/s--M9BH7rkX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m21a7vqec6widzcafnor.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--M9BH7rkX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m21a7vqec6widzcafnor.png)

ReactJS

[![Preact](https://res.cloudinary.com/practicaldev/image/fetch/s--Wxpqu9ow--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kymf0t9tu6kca3rs74h3.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--Wxpqu9ow--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kymf0t9tu6kca3rs74h3.png)

PREACT

For react app I used  [Create React App](https://create-react-app.dev/)  and for Preact used  [preact-cli](https://github.com/preactjs/preact-cli). Preact also gives an option to convert your existing react app to preact using  [preact-compat](https://github.com/preactjs/preact-compat), but I have built an app from scratch to see the best result.

To compare both app performances, I used  [GTmetrix](https://gtmetrix.com/)  and hosted both apps in  [Netlify](https://www.netlify.com/).

## [](https://dev.to/nilanth/dont-optimize-your-react-app-use-preact-instead-30og#react-app-performance)React App Performance

Below is the score given by  **GTMetrics**  for React-based App. I have used Route Based  **Code Splitting**  for the dashboard Component. The performance is  **80%**  with  **B grade**, largest content paint (**LCP**) and Layout Shifting (**CLS**) seems low.

[![react-p](https://res.cloudinary.com/practicaldev/image/fetch/s--ym9jw5aT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9duvf31zh9dz1cpfyk5j.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--ym9jw5aT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9duvf31zh9dz1cpfyk5j.png)

As we see in the below image, the entire page is loaded in  **2 sec**, First Content Paint is around  **1 sec**. Seems the performance is Not bad.

[![react-lt](https://res.cloudinary.com/practicaldev/image/fetch/s--aGNN4stW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ua7mplzkyms3boc2afzm.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--aGNN4stW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ua7mplzkyms3boc2afzm.png)

ReactJS Loding Frames

## [](https://dev.to/nilanth/dont-optimize-your-react-app-use-preact-instead-30og#preact-app-performance)Preact App Performance

All the metrics are in Green!!!. Seems the same app in Preact scored  **100%**  with an  **A grade**  in GTMetrix. The largest content paint (**LCP**) is less than  **500ms**, No Layout Shifting (**CLS**) happened.

[![preact-p](https://res.cloudinary.com/practicaldev/image/fetch/s--m-paYzFi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mc8f0mn0kionx40l09ph.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--m-paYzFi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mc8f0mn0kionx40l09ph.png)

This looks very impressive. Preact optimized our dashboard app quite well. The performance is drastically increased compared to React. Let us check the Loading time

[![preact-lt](https://res.cloudinary.com/practicaldev/image/fetch/s--mUQoGQaK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ikbqb26kdpya7zgyv4t5.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--mUQoGQaK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ikbqb26kdpya7zgyv4t5.png)

PREACT Loding Frames

As we see in the above image. The entire App loads in  **1.3 secs**  and the Time to First Byte (**TTFB**)is  **179ms**  !!. Preact seems very faster compared to React and it handles everything by default.

[![react-pc](https://res.cloudinary.com/practicaldev/image/fetch/s--mUQoGQaK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ikbqb26kdpya7zgyv4t5.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--mUQoGQaK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ikbqb26kdpya7zgyv4t5.png)

PREACT

[![preact-pc](https://res.cloudinary.com/practicaldev/image/fetch/s--aGNN4stW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ua7mplzkyms3boc2afzm.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--aGNN4stW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ua7mplzkyms3boc2afzm.png)

ReactJS

As looking at the page loading side by side, Preact app loads well ahead compared to React and The  **Time to interact**  is also faster than react app. Preact is  [Progressive Web App](https://web.dev/progressive-web-apps/)(PWA) by default so instant loading on repeat visits.

[![pwa](https://res.cloudinary.com/practicaldev/image/fetch/s--nXAMhign--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vj6cm5oo21j9r5emnp8g.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--nXAMhign--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vj6cm5oo21j9r5emnp8g.png)

Preact also gives some useful warning reg bundle size increase during the build as below

[![warnings](https://res.cloudinary.com/practicaldev/image/fetch/s---W1pc850--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oj6vphck9pe29jeewp16.png)](https://res.cloudinary.com/practicaldev/image/fetch/s---W1pc850--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oj6vphck9pe29jeewp16.png)

## [](https://dev.to/nilanth/dont-optimize-your-react-app-use-preact-instead-30og#suspense-and%C2%A0lazy)Suspense and Lazy

Some limitation I faced when converting to Preact is that Suspense and lazy loading are experimental and don't support on production as of now. but route based code splitting is enabled by default for the routes directory.

## [](https://dev.to/nilanth/dont-optimize-your-react-app-use-preact-instead-30og#reference)Reference

1.  [Preact](https://preactjs.com/)
2.  [Difference to React](https://preactjs.com/guide/v10/differences-to-react/)

## [](https://dev.to/nilanth/dont-optimize-your-react-app-use-preact-instead-30og#conclusion)Conclusion

As based on the above comparison Preact leads in all parts. Due to reduced library size and fast, Preact allow us to focus on developing features instead of manual optimization.

Thank you for reading.

Get more updates on  [Twitter](https://twitter.com/Nilanth).

## [](https://dev.to/nilanth/dont-optimize-your-react-app-use-preact-instead-30og#more-blogs)More Blogs

1.  [How to Structure Your React Redux App](https://dev.to/nilanth/how-to-structure-your-react-redux-app-4d24)
2.  [How to Reduce React App Loading Time By 70%](https://dev.to/nilanth/how-to-reduce-react-app-loading-time-by-70-1kmm)
3.  [Build a Portfolio Using Next.js, Tailwind, and Vercel with Dark Mode Support](https://dev.to/nilanth/build-a-portfolio-using-next-js-tailwind-and-vercel-4dd8)
4.  [No More ../../../ Import in React](https://dev.to/nilanth/no-more-import-in-react-2mbo)
5.  [10 React Packages with 1K UI Components](https://dev.to/nilanth/10-react-packages-with-1k-ui-components-2bf3)
6.  [5 Packages to Optimize and Speed Up Your React App During Development](https://dev.to/nilanth/5-packages-to-optimize-and-speed-up-your-react-app-during-development-4h5f)
7.  [How To Use Axios in an Optimized and Scalable Way With React](https://dev.to/nilanth/how-to-use-axios-in-an-optimized-and-scalable-way-with-react-518n)
8.  [15 Custom Hooks to Make your React Component Lightweight](https://dev.to/nilanth/15-custom-hooks-to-make-your-react-component-lightweight-17cd)
9.  [10 Ways to Host Your React App For Free](https://dev.to/nilanth/10-ways-to-host-your-react-app-for-free-27ga)
10.  [How to Secure JWT in a Single-Page Application](https://dev.to/nilanth/how-to-secure-jwt-in-a-single-page-application-cko)
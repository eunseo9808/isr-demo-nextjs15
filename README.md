This repo demonstrates inconsistencies between ISR using NextJS 14 and NextJS 15.

This repo uses NextJS 15 with React 19.0.0-rc-02c0e824-20241028. See https://github.com/samstr/isr-demo-nextjs14 for the NextJS 14 comparison.

### Steps to reproduce

1. `npm install`
2. `npm run build`
3. `npm start`
4. Go to http://localhost:3000 and click the example links

### Expected behavior

ISR should work correctly. The random number should be cached for 10 seconds as you refresh the page.

### Actual behavior

The number _does not_ get cached. It changes on every refresh.

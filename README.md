# Stryker Mutation Tests POC

Creating POCs of mutation tests using stryker

## Why mutation tests?

With mutation tests, we can get better quality from a test suite. As the mutation will try to run our function with different values ​​in conditions for example, these changes can be like inverting a condition or removing an entire condition from our code.

## Mutation Tests

The mutation tests are used for test our tests and keep all the mutations in our code tested, as conditions or state.

Mutation tests have some advantages, like:

- Identification of weak or flaky tests in our code
- High level of error detection
- The mutation score can give an idea of how useful our test suites are

Some disadvantages include:

- The large number of mutants reports on a test suite can confuse the user when read the report
- With a large number of mutants being tested, mutation testing can be time-consuming and pricey

## Docs

- [Stryker Mutation](https://stryker-mutator.io/)
- [Mutation Testing - Google Testing Blog](https://testing.googleblog.com/2021/04/mutation-testing.html)

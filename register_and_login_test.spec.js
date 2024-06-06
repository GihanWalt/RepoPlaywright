const { chromium } = require('playwright');
//const faker = require('@faker-js/faker'); // Import faker module

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  // Wait for the "Register" link to be clickable with an increased timeout
  await page.waitForSelector('[role="link"][name="Register"]', { timeout: 60000 });
  await page.click('[role="link"][name="Register"]');

  // Continue with the rest of your test script...
  await page.locator('[id="customer\\.firstName"]').click();
  await page.locator('[id="customer\\.firstName"]').fill('Test');
  await page.locator('[id="customer\\.lastName"]').click();
  await page.locator('[id="customer\\.lastName"]').fill('TestLast');
  await page.locator('[id="customer\\.address\\.street"]').click();
  await page.locator('[id="customer\\.address\\.street"]').fill('TestAddress');
  await page.locator('[id="customer\\.address\\.city"]').click();
  await page.locator('[id="customer\\.address\\.city"]').fill('CityTest');
  await page.locator('[id="customer\\.address\\.state"]').click();
  await page.locator('[id="customer\\.address\\.state"]').fill('StateTest');
  await page.locator('[id="customer\\.address\\.zipCode"]').click();
  await page.locator('[id="customer\\.address\\.zipCode"]').fill('0137');
  await page.locator('[id="customer\\.phoneNumber"]').click();
  await page.locator('[id="customer\\.phoneNumber"]').fill('0728888955');
  await page.locator('[id="customer\\.ssn"]').click();
  await page.locator('[id="customer\\.ssn"]').fill('SSNTest');
  await page.locator('[id="customer\\.username"]').click();
  await page.locator('[id="customer\\.username"]').fill('TestUser');
  await page.locator('[id="customer\\.password"]').click();
  await page.locator('[id="customer\\.password"]').fill('TestPass');
  await page.locator('#repeatedPassword').click();
  await page.locator('#repeatedPassword').fill('TestPass');
  await page.click('[role="button"][name="Register"]');
});


/*
// Import Playwright's chromium module
const { chromium } = require('playwright');

// Import faker module for generating fake data
const faker = require('@faker-js/faker');

// Define an asynchronous function to perform the automation
(async () => {
  // Launch a new Chromium browser instance with headless mode disabled
  const browser = await chromium.launch({ headless: false });

  // Create a new browser context
  const context = await browser.newContext();

  // Create a new page in the browser context
  const page = await context.newPage();

  // Generate fake data for registration
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const address = faker.address.streetAddress();
  const city = faker.address.city();
  const state = faker.address.stateAbbr();
  const zipCode = faker.address.zipCode();
  const phoneNumber = faker.phone.phoneNumber();
  const ssn = faker.datatype.number({ min: 100000000, max: 999999999 }).toString(); // Generate a random 9-digit number for SSN
  const username = faker.internet.userName();
  const password = faker.internet.password();

  // Navigate to Parabank website
  await page.goto('https://parabank.parasoft.com/');

  // Click on Register link
  await page.click('text=Register');

  // Fill in registration form
  await page.fill('input[name="customer.firstName"]', firstName);
  await page.fill('input[name="customer.lastName"]', lastName);
  await page.fill('input[name="customer.address.street"]', address);
  await page.fill('input[name="customer.address.city"]', city);
  await page.fill('input[name="customer.address.state"]', state);
  await page.fill('input[name="customer.address.zipCode"]', zipCode);
  await page.fill('input[name="customer.phoneNumber"]', phoneNumber);
  await page.fill('input[name="customer.ssn"]', ssn);
  await page.fill('input[name="customer.username"]', username);
  await page.fill('input[name="customer.password"]', password);
  await page.fill('input[name="repeatedPassword"]', password);

  // Click on Register button
  await page.click('input[type="submit"]');

  // Wait for registration confirmation
  await page.waitForNavigation();

  // Log registration details
  console.log('Registered User:');
  console.log('Username:', username);
  console.log('Password:', password);

  // Log out (if needed)
  // await page.click('text=Log Out');

  // Log in with the newly created account
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('input[value="Log In"]');

  // Wait for login confirmation
  await page.waitForNavigation();

  // Check if logged in successfully
  const loggedIn = await page.$('text=Log Out');
  if (loggedIn) {
    console.log('Logged in successfully!');
  } else {
    console.log('Failed to log in!');
  }

  // Close the browser
  await browser.close();
})();
*/

import { test, expect, chromium } from '@playwright/test';

// test.beforeAll('browsers', async({chromium})) => {

// };

// test.afterEach() {

// }

test('click slider button and change background color to dark mode', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.locator('div').nth(3).click();
  await expect(page.locator('div').nth(3)).toBeVisible();
});

test('click the navbar About me and YT Link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'About me' }).click();
  await expect(page.getByRole('link', { name: 'About me' })).toBeVisible();

  await page.getByRole('link', { name: 'Estragon' }).click();
  await page.getByRole('button', { name: 'Accept all' }).click();
  await expect(page.locator('yt-formatted-string').filter({ hasText: /^Estragon$/ })).toHaveText('Estragon');
});

test('click on instagram link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'About me' }).click();
  await expect(page.getByRole('link', { name: 'About me' })).toBeVisible();

  await page.getByRole('link', { name: 'Instagram' }).click();
  await page.getByRole('button', { name: 'Allow all cookies' }).click();
  await expect(page.getByRole('heading', { name: 'codingbyestragon' })).toHaveText('codingbyestragon');
});

test('click on YT link from CodingByEstragon', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'About me' }).click();
  await expect(page.getByRole('link', { name: 'About me' })).toBeVisible();

  await page.getByRole('link', { name: 'YouTube' }).click();
  await page.getByRole('button', { name: 'Accept all' }).click();
  await expect(page.locator('yt-formatted-string').filter({ hasText: /^CodingByEstragon$/ })).toHaveText('CodingByEstragon');
});

test('click on Discord link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'About me' }).click();
  await expect(page.getByRole('link', { name: 'About me' })).toBeVisible();

  await page.getByRole('link', { name: 'Discord' }).click();
  await expect(page.getByRole('heading', { name: 'Discord App Launched'})).toBeVisible();

  await page.getByRole('button', { name: 'Continue to Discord' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome back!' })).toBeVisible();
});

test('click on Github link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'About me' }).click();
  await expect(page.getByRole('link', { name: 'About me' })).toBeVisible();

  await page.getByRole('link', { name: 'Github' }).click();
  await expect(page.getByLabel('commits by CodingByEstragon')).toBeVisible();
});

test('click navbar Project', async ({page}) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Project' }).click();
  await expect(page.getByRole('link', { name: 'Project' })).toBeVisible();
});

test('click Forum and go to Neuer Beitrag', async ({page}) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Forum', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Forum', exact: true })).toBeVisible();

  await page.getByRole('link', {name: 'Neuer Beitrag'}).click();
  
});

test('click Forum and go to Antworten', async ({page}) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Forum', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Forum', exact: true })).toBeVisible();

  await page.getByRole('link', {name: 'Antworten'}).click();
  
});

test('click navbar Impressum', async ({page}) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Impressum' }).click();
  await expect(page.getByRole('link', { name: 'Impressum' })).toBeVisible();

  await page.getByRole('link', { name: 'Discord' }).click();
  await expect(page.getByRole('heading', { name: 'Discord App Launched'})).toBeVisible();

  await page.getByRole('button', { name: 'Continue to Discord' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome back!' })).toBeVisible();
});

test('click navbar Signin and click checkbox', async ({page}) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByRole('button', { name: 'Login Now' })).toBeVisible();

  await page.getByLabel('Remember me').click();
  await expect(page.getByLabel('Remember me')).toBeChecked();
});

test('click navbar Signin and go to Sign up', async ({page}) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByRole('button', { name: 'Login Now' })).toBeVisible();

  await page.getByRole('link', { name: 'Signup now' }).click();
  await expect(page.getByRole('button', { name: 'Register Now' })).toBeVisible();
});


test('click navbar Signup and click checkbox', async ({page}) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Sign up' }).click();
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();

  await page.getByLabel('Remember me').click();
  await expect(page.getByLabel('Remember me')).toBeChecked();
});

test('click navbar Signup and go to Sign in', async ({page}) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Sign up' }).click();
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();

  await page.getByRole('link', { name: 'Signin now' }).click();
  await expect(page.getByRole('button', { name: 'Login Now' })).toBeVisible();
});

test('click Sign Up and fill the textboxes and click the Register button', async ({page}) => {

  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Sign up' }).click();

  await page.getByPlaceholder('Enter your name').fill('testname');
  await page.getByPlaceholder('Enter your email').fill('test.name@gmail.com');
  await page.getByPlaceholder('Enter your password').fill('testpassword');
  await page.getByPlaceholder('Cofirm password').fill('testpassword');
  await expect(page.getByRole('button', { name: 'Register Now' })).toBeVisible();
});

test('click Sign In and fill the textboxes and click the Login button', async ({page}) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Enter your email').fill('test.name@gmail.com');
  await page.getByPlaceholder('Enter your password').fill('testpassword');
  await expect(page.getByRole('button', { name: 'Login Now' })).toBeVisible();
});
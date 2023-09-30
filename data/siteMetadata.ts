export let siteMetadata = {
  siteUrl: 'www.rikenpatel.work',
  siteRepo: 'https://github.com/',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/logo.jpg',
  email: 'riken.patel0@gmail.com',
  github: 'https://github.com',
  x: 'https://x.com',
  facebook: 'https://facebook.com',
  youtube: 'https://www.youtube.com',
  linkedin: 'https://www.linkedin.com/in/hta218/',
  locale: 'en-US',
  analyticsURL: 'https://analytics.google.com',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false, // true | false
    umamiWebsiteId: '12983712sjdcksd',
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'riken',
    linkedin: 'riken',
    x: 'riken',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}

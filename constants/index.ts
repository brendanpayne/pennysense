import { icons, onboardImage } from './Images';

const tabConfig = [
  { name: 'transactions', title: 'Transactions', icon: icons.transactions },
  { name: 'budgets', title: 'Budgets', icon: icons.budgets },
  { name: 'home', title: 'Home', icon: icons.home },
  { name: 'insights', title: 'Insights', icon: icons.insights },
  { name: 'profile', title: 'Profile', icon: icons.profile },
];

const onboardConfig = [
  { 
    image: onboardImage[1], 
    title: 'Track your spending',
    desc: 'Effortlessly monitor your expenses and stay on top of your financial game.',
  },
  {
    image: onboardImage[2],
    title: 'Set and achieve budgets',
    desc: 'Create budgets that work for you and reach your financial goals faster.',
  },
  {
    image: onboardImage[3],
    title: 'Get personalized insights',
    desc: 'Gain valuable insights and make smarter financial decisions with our AI-powered analytic tools.',
  }
];

export { tabConfig, onboardConfig };
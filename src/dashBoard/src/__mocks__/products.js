import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Dropbox link',
    media: 'https://material-kit-react.devias.io/static/images/products/product_1.png',
    title: 'Dropbox',
    totalDownloads: '123'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Medium link',
    media: 'https://material-kit-react.devias.io/static/images/products/product_2.png',
    title: 'Medium Corporation',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Slack link',
    media: 'https://material-kit-react.devias.io/static/images/products/product_3.png',
    title: 'Slack',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Lyft link',
    media: 'https://material-kit-react.devias.io/static/images/products/product_4.png',
    title: 'Lyft',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'GitHub link',
    media: 'https://material-kit-react.devias.io/static/images/products/product_5.png',
    title: 'GitHub',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Squarespace link',
    media: 'https://material-kit-react.devias.io/static/images/products/product_6.png',
    title: 'Squarespace',
    totalDownloads: '835'
  }
];

import { createClient } from 'contentful';

class ContentfulClient {
  async getClientInstance() {
    const client = await createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN
    });
    return client;
  }
}

export default ContentfulClient;

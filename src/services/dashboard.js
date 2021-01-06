import Repository from './repository';
import { dashboard } from './endpoints';

const client = new Repository();

export default {
  async getPosts() {
    const r = await client.get(dashboard.getPosts);
    return r;
  },

  async getComments() {
    const r = await client.get(dashboard.getComments);
    return r;
  },

  async getAlbums() {
    const r = await client.get(dashboard.getAlbums);
    return r;
  },
};
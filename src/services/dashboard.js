import Repository from './repository';
import { dashboard } from './endpoints';

const client = new Repository();

export default {
  async getPosts() {
    const r = await client.get(dashboard.getPosts);
    return r;
  },

  async getComments(postId) {
    const r = await client.get(`${dashboard.getPosts}/${postId}/comments`);
    return r;
  },

  async getAlbums() {
    const r = await client.get(dashboard.getAlbums);
    return r;
  },
  async getUsers() {
    const r = await client.get(dashboard.getUsers);
    return r;
  },
  async getPhotos(postId) {
    const r = await client.get(`${dashboard.getPosts}/${postId}/photos`);
    return r;
  }

};
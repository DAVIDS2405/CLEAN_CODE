import { PostService } from "./05-dependency-b";
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiPost,
} from "./05-dependency-c";

// Main
(async () => {
  const provider = new WebApiPost();
  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();

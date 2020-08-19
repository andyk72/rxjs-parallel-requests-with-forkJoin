import parallel from "./rxjs-parallel";

import "./styles.css";

parallel([
  `https://jsonplaceholder.typicode.com/posts/1`,
  `https://jsonplaceholder.typicode.com/posts/2`,
  `https://jsonplaceholder.typicode.com/posts/3`
]).subscribe((response) => _utils.render(response));

const _utils = {
  render: (response) => {
    const htmlPosts = response.reduce((posts, post) => {
      return (
        posts +
        `
        <div class="post">
          <div class="post-title">${post.title}</div>
          <div class="post-body">${post.body}</div>
        </div>
      `
      );
    }, "");

    const html = `
      <h3>Loaded Posts</h3>
      ${htmlPosts}
    `;

    document.getElementById("app").innerHTML = html;
  }
};

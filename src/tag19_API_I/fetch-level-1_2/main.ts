type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then((data: Comment[]) => {
    data.forEach((comment) => {
      console.log(comment.email);
    });
  })
  .catch((error) => console.error("Ошибка при запросе комментариев:", error));

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then((data: Post[]) => {
    // Вывод всех постов
    console.log("Все посты:");
    data.forEach((post) => console.log(post));

    // Пост с самой высокой ID
    const highestId = data.reduce((max, post) => Math.max(max, post.id), 0);
    console.log("Самая высокая ID:", highestId);

    // Пост с самым коротким заголовком
    const shortestTitle = data.reduce(
      (shortest, post) =>
        post.title.length < shortest.length ? post.title : shortest,
      data[0].title
    );
    console.log("Самый короткий заголовок:", shortestTitle);

    // Пост с самым длинным текстом
    const longestBody = data.reduce(
      (longest, post) =>
        post.body.length > longest.length ? post.body : longest,
      ""
    );
    console.log("Самый длинный текст:", longestBody);
  })
  .catch((error) => console.error("Ошибка при запросе постов:", error));

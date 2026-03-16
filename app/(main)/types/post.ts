export interface Post {
  id: string;
  title: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  contentSnippet: string;
  tags: string[];
  upvotes: number;
  commentsCount: number;
  createdAt: Date;
}

import { render, screen } from "@testing-library/react";
import { PostCard } from "./PostCard";
import { Post } from "@/app/(main)/types/post";
import "@testing-library/jest-dom";

describe("PostCard", () => {
  const mockPost: Post = {
    id: "1",
    title: "Test Post Title",
    author: {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.png",
    },
    contentSnippet: "This is a test content snippet...",
    tags: ["react", "testing", "typescript"],
    upvotes: 10,
    commentsCount: 5,
    createdAt: new Date("2023-10-27T10:00:00Z"),
  };

  it("should render the author's name", () => {
    render(<PostCard post={mockPost} />);
    const authorName = screen.getByText("John Doe");
    expect(authorName).toBeInTheDocument();
  });

  it("should render the post title", () => {
    render(<PostCard post={mockPost} />);
    const postTitle = screen.getByText("Test Post Title");
    expect(postTitle).toBeInTheDocument();
  });

  it("should render the content snippet", () => {
    render(<PostCard post={mockPost} />);
    const contentSnippet = screen.getByText("This is a test content snippet...");
    expect(contentSnippet).toBeInTheDocument();
  });

  it("should render the formatted creation date", () => {
    render(<PostCard post={mockPost} />);
    // The date is formatted as "27 de outubro de 2023"
    const date = screen.getByText("27 de outubro de 2023");
    expect(date).toBeInTheDocument();
  });

  it("should render all tags", () => {
    render(<PostCard post={mockPost} />);
    mockPost.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it("should render the number of upvotes", () => {
    render(<PostCard post={mockPost} />);
    const upvotes = screen.getByText(mockPost.upvotes.toString());
    expect(upvotes).toBeInTheDocument();
  });

  it("should render the number of comments", () => {
    render(<PostCard post={mockPost} />);
    const comments = screen.getByText(mockPost.commentsCount.toString());
    expect(comments).toBeInTheDocument();
  });

  it('should render the "Ver Mais" button', () => {
    render(<PostCard post={mockPost} />);
    const button = screen.getByRole("button", { name: "Ver Mais" });
    expect(button).toBeInTheDocument();
  });
});

import { PostCard } from "@/app/components/PostCard/PostCard";
import { mockPosts } from "./mock-data";

export default function HomePage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        💡 Top Pitches Lançados Hoje 💼
      </h1>
      <div className="flex flex-col items-center space-y-6">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

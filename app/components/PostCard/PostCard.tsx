import { Post } from "@/app/(main)/types/post";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp } from "lucide-react";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-gray-800 shadow-lg shadow-blue/60 text-white">
      <CardHeader>
        <div className="flex flex-col">
          <span className="font-semibold">{post.author.name}</span>
          <span className="text-sm text-muted-foreground">
            {post.createdAt.toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
        <p className="text-muted-foreground mb-4">{post.contentSnippet}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex space-x-4 text-muted-foreground">
          <div className="flex items-center space-x-1">
            <ThumbsUp className="h-4 w-4" />
            <span>{post.upvotes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageSquare className="h-4 w-4" />
            <span>{post.commentsCount}</span>
          </div>
        </div>
        <Button>Ver Mais</Button>
      </CardFooter>
    </Card>
  );
}

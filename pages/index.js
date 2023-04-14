import PostCard from "@/components/PostCard";
import { getPosts } from "../services";
import RecentPosts from "@/components/RecentPosts";

export default function Home({ posts }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home page</h1>
      <div>
        {posts.map((post) => {
          console.log(post.node.title);
          return <PostCard post={post.node} key={post.node.title} />;
        })}
      </div>
      <RecentPosts />
    </main>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

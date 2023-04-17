import PostCard from "@/components/PostCard";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <main className="">
      <h1>Home page</h1>
      <div>
        {posts.map((post) => {
          return <PostCard post={post} key={post.title} />;
        })}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

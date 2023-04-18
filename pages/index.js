import PostCard from "@/components/PostCard";
import Aside from "@/components/Aside";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <>
      <h1 className="mt-16 py-12 bg-red-400">Home page</h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12  px-4">
        <main className="col-span-1 lg:col-span-9 lg:mr-12">
          <div>
            {posts.map((post) => {
              return <PostCard post={post} key={post.title} />;
            })}
          </div>
        </main>
        <Aside />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

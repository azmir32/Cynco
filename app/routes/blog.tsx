import type { MetaFunction } from "@remix-run/node";
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import BlogPost from '~/components/sections/blog-post';
import { getPosts } from '~/utils/post';
import type { Post } from '~/utils/post';
import { OnboardingCTASection } from "~/components/sections/Onboarding-cta-section";

export const meta: MetaFunction = () => {
  return [
    { title: "Cynco.io Blog - Latest Updates and Insights" },
    { name: "description", content: "Stay updated with the latest financial technology insights and Cynco product updates." },
  ];
};

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();
  return json({ posts });
};

export default function Blog() {
  const { posts } = useLoaderData<{ posts: Post[] }>();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold mb-4">Our Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights, tutorials, and updates about Cynco
            and financial technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        <div className="p-4 mt-10">
            <OnboardingCTASection />
        </div>
      </main>
    </div>
  );
}
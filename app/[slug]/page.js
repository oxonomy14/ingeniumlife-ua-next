import BlogDetailSection from "@/component/blog/BlogDetailSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import Layout from "@/component/layout/Layout";
//import { blogData } from "@/data/Data";
import { fetchPosts } from "../../services/api.js";

const getData = async () => {
  try {
    const postsData = await fetchPosts();
    return Array.isArray(postsData) ? postsData : [];
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
};

export async function generateMetadata({ params }) {
  const postsData = await getData();
  const blogDesc = postsData.find((item) => item.slug === params.slug);

  if (!blogDesc) {
    return {
      title: "Статья не найдена",
      description: "Извините, такая статья не найдена на сайте.",
    };
  }

  return {
    title: blogDesc.title,
    description: blogDesc.desc,
    openGraph: {
      title: blogDesc.title,
      description: blogDesc.desc,
      images: [`${blogDesc.imgSrc}`],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blogDesc.title,
      description: blogDesc.desc,
      images: [`${blogDesc.imgSrc}`],
    },
  };
}

export default async function BlogDetails({ params }) {
  const postsData = await getData();
  const { slug } = params;
  const blogDesc = postsData.find((item) => item.slug === slug);

  return (
    <Layout>
      <BreadcrumbSection
        header={blogDesc.longTitle}
        title="Перейти к чтению статьи"
      />
      {blogDesc ? (
        <BlogDetailSection blogDesc={blogDesc} postsData={postsData} />
      ) : (
        <ErrorSection type="Blog" />
      )}
    </Layout>
  );
}

import BlogDetailSection from "@/component/blog/BlogDetailSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import Layout from "@/component/layout/Layout";
import { blogData } from "@/data/Data";
// export const metadata = {
//   title: 'Eduor Blog Details Page',
//   description: 'Developed by Azizur Rahman',
// }

export async function generateMetadata({ params }) {
  const blogDesc = blogData.find((item) => item.slug === params.slug);

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
      images: [`/${blogDesc.imgSrc}`],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blogDesc.title,
      description: blogDesc.desc,
      images: [`/${blogDesc.imgSrc}`],
    },
  };
}

export default function BlogDetails({ params }) {
  const { slug } = params;
  const blogDesc = blogData.find((item) => item.slug === slug);

  return (
    <Layout>
      <BreadcrumbSection header="Блог InGenium" title="Blog Details" />
      {blogDesc ? (
        <BlogDetailSection blogDesc={blogDesc} />
      ) : (
        <ErrorSection type="Blog" />
      )}
    </Layout>
  );
}

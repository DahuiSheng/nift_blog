import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { client } from '../libs/client';
import { Blog } from '../types/blog';
import { Tag } from '../types/tag';

type Props = {
  blogs: Array<Blog>;
  tag: Array<Tag>
}

export default function Home({ blogs, tag }: Props) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      
      {/* タグ一覧 */}
      <div>
        <ul>
        {tag.map((tag) => (
          <li key={tag.id}>
            <Link href={`/tag/${tag.id}`}>
              <a>{tag.name}</a>
            </Link>
          </li>
        ))}
        </ul>
      </div>

      {/* 投稿一覧 */}
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {blogs.map(blog => (
          <div className="rounded overflow-hidden shadow-lg" key={blog.id}>
            <Link href={`/blog/${blog.id}`} passHref>
              <img
                className="w-full"
                src={blog.eyecatch.url}
                alt="Sunset in the mountains"
              />
            </Link>
            <div className="px-6 py-4">
              <Link href={`/blog/${blog.id}`} passHref>
               <a>{blog.title}</a>
              </Link>
            </div>
            <div className="px-6 pt-4 pb-2">
              {blog.tag && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{blog.tag.name}
                </span>
                )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}


// 投稿データとタグデータをAPIより取得
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs', });
  const categoryData = await client.get({ endpoint: 'tag' });

  return {
    props: {
      blogs: data.contents,
      tag: categoryData.contents,
    },
  };
};

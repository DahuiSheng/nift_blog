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
      {/* 投稿一覧 */}
      <div className="container w-auto justify-between px-4 pt-4 pb-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {/* 記事のマッピング */}
        {blogs.map(blog => (
          <div className="rounded overflow-hidden shadow-lg" key={blog.id}>

            {/* 画像の表示 */}
            <Link href={`/blog/${blog.id}`} passHref>
              <img
                className=" w-fit"
                src={blog.eyecatch.url}
                alt="Sunset in the mountains"
              />
            </Link>

            {/* ブログのタイトル */}
            <div className="px-6 py-4">
              <Link href={`/blog/${blog.id}`} passHref>
                <div className='font-bold'>{blog.title}</div>
              </Link>
            </div>

            {/* タグの表示 */}
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

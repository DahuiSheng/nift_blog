import { GetServerSideProps } from 'next';
import type { Blog } from '../../types/blog';
import { client } from '../../libs/client';
import * as gtag from '../../libs/gtag';

type Props = {
  blog: Blog;
};

export default function Blog({ blog }: Props) {
  const ClickEvent = () => {
    gtag.event({
      action: 'click_event',
      category: 'link_button',
      label: 'event',
    })
  }
  return (
    <>
      <div className="max-w-6xl py-6 mx-auto bg-zinc-800">
        {/* ブログのタイトルを表示 */}
        <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">
          {blog.title}
        </div>
      </div>
      {/* ブログのサムネを表示 */}
      <img
        className="object-cover w-full shadow-sm h-full"
        src={blog.eyecatch.url}
      />

      {/* ブログの中身を表示 */}
      <div className=" py-6 mx-auto bg-white">
          <div className="max-w-6xl px-3 py-6 mx-auto">
            {/* ブログのタイトルを表示 */}
            {/* <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-black">
              {blog.title}
            </div> */}

            {/* ブログのタグを表示 */}
            {blog.tag && (
              <div className="flex items-center justify-start mt-4 mb-4">
                <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                  #{blog.tag.name}
                </div>
              </div>
            )}

            {/* ブログの本文を表示 */}
            <div className='mt-2 mb-8 md:px-6'>
              <div dangerouslySetInnerHTML={{
                __html: `${blog.content}`,
              }}
              />
            </div>

          </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blogs',
    contentId: idExceptArray,
  });

  return {
    props: {
      blog: data,
    },
  };
};
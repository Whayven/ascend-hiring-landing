// Markdown.tsx
import { Element } from 'hast';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const MarkdownComponents: object = {
  p: (paragraph: { children?: boolean; node?: Element }) => {
    const { node } = paragraph;
    if (!node) {
      return null;
    }
    if (
      node.children[0].type === 'element' &&
      node.children[0].tagName === 'img'
    ) {
      const image = node.children[0];
      const metastring = image.properties.alt as string;
      const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
      const metaWidth = metastring.match(/{([^}]+)x/);
      const metaHeight = metastring.match(/x([^}]+)}/);
      const width = metaWidth ? metaWidth[1] : '768';
      const height = metaHeight ? metaHeight[1] : '432';
      const isPriority = metastring?.toLowerCase().match('{priority}');
      const hasCaption = metastring?.toLowerCase().includes('{caption:');
      const imageSrc = (image.properties.src as string) ?? '';
      const caption = metastring?.match(/{caption: (.*?)}/)?.pop();
      const priority = isPriority ? true : false;

      return (
        <div className='postImgWrapper'>
          <Image
            src={imageSrc}
            width={Number(width)} // Convert width to a number
            height={Number(height)}
            className='mx-auto mt-4 aspect-video overflow-hidden rounded-lg object-cover sm:max-w-xl lg:max-w-full'
            alt={alt}
            priority={priority}
            quality={100}
          />
          {hasCaption ? (
            <div className='caption' aria-label={caption}>
              {caption}
            </div>
          ) : null}
        </div>
      );
    }
    return <p>{paragraph.children}</p>;
  },
};
export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown components={MarkdownComponents}>{children}</ReactMarkdown>
  );
}

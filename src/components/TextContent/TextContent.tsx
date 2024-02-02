import { Heading } from '@/components/Heading/Heading'

export type TextContentProps = {
  title?: string
  content: string
}

const cssWrapper = 'text-white min-md:bg-white min-md:p-md min-md:text-black'
const cssHeading = `
  [&_h1]:text-white [&_h1]:my-xs [&_h1]:pl-2 [&_h1]:border-l-[7px] [&_h1]:border-secondary [&_h1]:min-md:text-black
  [&_h2]:text-white [&_h2]:my-xs [&_h2]:pl-2 [&_h2]:border-l-[7px] [&_h2]:border-secondary [&_h2]:min-md:text-black
  [&_h3]:text-white [&_h3]:my-xs [&_h3]:pl-2 [&_h3]:border-l-[7px] [&_h3]:border-secondary [&_h3]:min-md:text-black
  [&_h4]:text-white [&_h4]:my-xs [&_h4]:pl-2 [&_h4]:border-l-[7px] [&_h4]:border-secondary [&_h4]:min-md:text-black
  [&_h5]:text-white [&_h5]:my-xs [&_h5]:pl-2 [&_h5]:border-l-[7px] [&_h5]:border-secondary [&_h5]:min-md:text-black
  [&_h6]:text-white [&_h6]:my-xs [&_h6]:pl-2 [&_h6]:border-l-[7px] [&_h6]:border-secondary [&_h6]:min-md:text-black
`
const cssParagraph = '[&_p]:mb-xs'
const cssLink = '[&_a]:text-primary [&_a]:underline'
const cssImg = '[&_img]:max-w-[min(44rem,100%)] [&_img]:mb-xs'
const cssList =
  '[&_ul]:py-xs [&_ul]:px-sm [&_ol]:py-xs [&_ol]:px-sm [&_ul]:list-disc [&_ol]:list-decimal'
const cssHr = '[&_hr]:my-sm'

export const TextContent = ({ title, content }: TextContentProps) => (
  <div
    className={`${cssWrapper} ${cssHeading} ${cssParagraph} ${cssLink} ${cssImg} ${cssList} ${cssHr}`}
  >
    {!!title && (
      <Heading
        lineLeft
        lineColor="secondary"
        className="[&_h2]:min-md:text-black"
      >
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)

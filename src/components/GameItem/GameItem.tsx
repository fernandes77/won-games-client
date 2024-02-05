import { ClassName } from '@/types/class-name'
import { cn } from '@/utils/merge-classnames'
import { IconDownload } from '@tabler/icons-react'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
} & ClassName

export const GameItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo,
  className
}: GameItemProps) => (
  <div
    className={cn(
      'p-sm border-b-[1px] border-gray-light min-md:flex',
      className
    )}
  >
    <div className="flex">
      <div className="shrink-0 mr-3 w-24 h-14 min-md:mr-xs min-md:w-[9.4rem] min-md:h-[4.4rem]">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="flex items-center text-sm text-black mb-xxs min-md:text-xl">
          {title}
          {!!downloadLink && (
            <a
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
              className="text-primary ml-xxs"
            >
              <IconDownload size={22} />
            </a>
          )}
        </h3>

        <div className="text-white py-[2px] px-xxs bg-secondary rounded text-sm font-bold">
          {price}
        </div>
      </div>
    </div>

    {!!paymentInfo && (
      <div
        className="text-gray text-sm flex flex-col min-w-[17.5rem] mt-xs
        min-md:mt-0 min-md:flex-1 min-md:flex-col-reverse min-md:justify-between min-md:items-end"
      >
        <p>{paymentInfo.purchaseDate}</p>
        <div className="flex items-center max-md:mt-xs">
          <span>{paymentInfo.number}</span>
          <img
            src={paymentInfo.img}
            alt={paymentInfo.flag}
            className="ml-xxs"
          />
        </div>
      </div>
    )}
  </div>
)

import { Swap } from '@pancakeswap/widgets-internal'

const Page: React.FC<
  React.PropsWithChildren<{
    removePadding?: boolean
    hideFooterOnDesktop?: boolean
    noMinHeight?: boolean
  }>
> = ({ children, removePadding = false, hideFooterOnDesktop = false, noMinHeight = false, ...props }) => {
  return (
    <Swap.Page
      removePadding={removePadding}
      noMinHeight={noMinHeight}
      hideFooterOnDesktop={hideFooterOnDesktop}
      {...props}
    >
      {children}
    </Swap.Page>
  )
}

export default Page

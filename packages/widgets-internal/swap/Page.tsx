import { AtomBox, AtomBoxProps, SwapCSS } from "@pancakeswap/uikit";

type SwapPageProps = AtomBoxProps & {
  removePadding?: boolean;
  hideFooterOnDesktop?: boolean;
  noMinHeight?: boolean;
};

export const SwapPage = ({ removePadding, noMinHeight, children, hideFooterOnDesktop, ...props }: SwapPageProps) => (
  <AtomBox className={SwapCSS.pageVariants({ removePadding, noMinHeight })} {...props}>
    {children}
    <AtomBox display="flex" flexGrow={1} />
    <AtomBox display={["block", null, null, hideFooterOnDesktop ? "none" : "block"]} width="100%" />
  </AtomBox>
);

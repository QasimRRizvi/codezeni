import { smoothScroll } from "@/utils/smoothScroll";

const useScroll = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.href;
    if (href.includes('#')) {
      smoothScroll(e);
    }
  };

  return { handleClick };
};

export default useScroll;

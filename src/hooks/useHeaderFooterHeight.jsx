import { useLayoutEffect, useState } from 'react'

function useHeaderFooterHeight() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useLayoutEffect(() => {
    setHeaderHeight(document.getElementsByTagName('header')[0].offsetHeight);
    setFooterHeight(document.getElementsByTagName('footer')[0].offsetHeight);
  }, [])

  return { headerHeight, footerHeight }
}

export default useHeaderFooterHeight
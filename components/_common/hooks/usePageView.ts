import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../../../libs/gtag'

export default function usePageView() {
  const router = useRouter()
  console.log(gtag.GA_ID)
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }

    // { shallow }
    const handleRouteChange = (path:string) => {
      // if (!shallow) {
      //   gtag.pageview(path)
      // }
      gtag.pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
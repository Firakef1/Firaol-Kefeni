import type { MouseEvent } from 'react'
import Lenis from 'lenis'

let lenis: Lenis | null = null
let rafId = 0

export function initSmoothScroll() {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!lenis) {
    lenis = new Lenis({
      duration: reduce ? 0.2 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduce,
    })

    const raf = (time: number) => {
      lenis?.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
  }

  return () => {
    cancelAnimationFrame(rafId)
    lenis?.destroy()
    lenis = null
  }
}

function navOffset() {
  const nav = document.querySelector('.nav')
  return (nav?.getBoundingClientRect().height ?? 72) + 12
}

export function scrollToId(id: string) {
  const target = document.getElementById(id)
  if (!target) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const offset = navOffset()

  if (lenis && !reduce) {
    lenis.scrollTo(target, {
      offset: -offset,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    return
  }

  const top = target.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
}

export function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.getAttribute('href')
  if (!href?.startsWith('#')) return

  const id = href.slice(1)
  if (!id) return

  event.preventDefault()
  scrollToId(id)
  history.pushState(null, '', href)
}

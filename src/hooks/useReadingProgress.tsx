import { useEffect, useState } from 'react';

export function useReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollProgress = window.scrollY
      const scrollHeigh = document.body.scrollHeight - window.innerHeight
      if (scrollHeigh) {
        setProgress(
          Number((scrollProgress / scrollHeigh).toFixed(2)) * 100
        )
      }
    }

    window.addEventListener('scroll', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])
  return progress;
}

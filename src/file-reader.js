import { useEffect, useState } from 'react'

export const useFileReader = options => {
  const { method = 'readAsText', onloadHook } = options
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!file) return
    const reader = new FileReader(file)
    reader.onloadstart = () => {
      setLoading(true)
    }
    reader.onloadend = () => {
      setLoading(false)
    }
    reader.onload = e => {
      setResult(e.target.result)
      onloadHook(e.target.result)
    }
    reader.onError = e => {
      setError(e)
    }
    try {
      reader[method](file)
    } catch (e) {
      setError(e)
    }
  }, [file])

  return [{ result, error, file, loading }, setFile]
}

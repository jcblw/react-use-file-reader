## Use File Reader

This is a [React hook](https://reactjs.org/docs/hooks-overview.html) to use the [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) api.

# Usage

```javascript
export const MyComponent = prop => {
  const [{ result, error, loading }, setFile] = useFileReader({
    method: 'readAsDataURL',
  })

  const onInputFile = e => {
    setFile(e.target.files[0])
  }

  return (
    <>
      {loading ? <p>Reading file</p> : null}
      {error ? <p>{error.message}</p> : null}
      {result ? <img src={result} /> : null}
      <input type="file" accept=".jpg,.png,.svg" onInput={onInputFile} />
    </>
  )
}
```

### Options

**method** [String] - This is the read method you would use like: _readAsText_ _readAsDataURL_. readAsText is the default.
**onload** [Function] - This fire onload event of the reader. This parameter is the result of the file reader.

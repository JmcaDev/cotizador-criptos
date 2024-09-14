
type ErrorMessageProps = {
    children: React.ReactNode
}

function ErrorMessage({children} : ErrorMessageProps) {
  return (
    <div>
        {children}
    </div>
  )
}

export default ErrorMessage
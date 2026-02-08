type FooterProps = {
  year: number
  author: string
}

const Footer = ({ year, author }: FooterProps) => {
  return (
    <footer className="footer">
      <span>{author}</span>
      <span>© {year}</span>
    </footer>
  )
}

export default Footer

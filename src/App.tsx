import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="page">
      <Header title="Sunday Activity: React Components" subtitle="Functional components + JSX + props" />
      <Content
        intro="This page is built with simple React components and a touch of CSS."
        highlights={[
          'Reusable Header, Content, and Footer components',
          'Props passed to Header and Content',
          'Clean JSX structure and layout',
        ]}
      />
      <Footer year={new Date().getFullYear()} author="Jithesh P Shetty" />
    </div>
  )
}

export default App

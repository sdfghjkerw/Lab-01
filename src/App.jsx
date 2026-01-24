import './App.css'
import ProductList from './ProductList'
import Section from './Section'
import Card from './Card'

function App() {
  return (
    <Section title="Products">
      <ProductList/>
      <div>
        <Card title="карточка">первая карточка</Card>
        <Card title="карточка2" className="highlight">вторая карточка</Card>
    </div>
    </Section>
  )
}

export default App

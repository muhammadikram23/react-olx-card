import React from 'react'
import Card from './component/Card.jsx'

function App() {
  return (
    <div style={{
      height: "95vh",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center", 
      gap: "10px",
    }}>
      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8zWb5gc_LDYhK_5spM6frSR4Y8xS2KNaXw&s" price="RS 1.09 Lac" title="IPhone 15 jv 128gb iPhone 16 Pro Max JV 256 GB" location="Others, Faisalabad" time="4 days ago" icon={<i class="fa-regular fa-heart"></i>} />
      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8fRPWu4aAmKZLfe3u5hihBpB0iyXIecUPw&s" price="RS 1.58 Lac" title="IPhone 14 | 128 gb | PTA Approved | 86% Plus | Original Battery Health" location="Model Town, Lahore" time="3 days ago" icon={<i class="fa-regular fa-heart"></i>} />
      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHBy39uX_Xa0GDw_heInZZ4gQt_N3Mj7r1Q&s" price="RS 6000" title="Samsung A17 8/255 Pta Approved On Easy Installment" location="Samanabad, Lahore" time="3 weeks ago" icon={<i class="fa-regular fa-heart"></i>} />
      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVGHTz--ye9vPdN8A-W4bd584a5OLlPF_bA&s" price="RS 1.25 Lac" title="IPhone 13 Pro max 256gb jv" location="Sahara City, Pakistan" time="5 days ago" icon={<i class="fa-regular fa-heart"></i>} />

    </div>
  )
}

export default App
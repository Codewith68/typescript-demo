import Title from "./Title"

function Header() {
  return (
    <>
    <Title 
    text="hello from Title"
     list={['one']} 
     onChangeHandler={(e:React.ChangeEvent<HTMLInputElement>)=>{console.log(e.target.value)}}
     >
        someString
        <p>
            someString is any 
        </p>
    </Title>
    </>
  )
}

export default Header
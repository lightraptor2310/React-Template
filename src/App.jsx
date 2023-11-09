import {Button} from '@mui/material'


function App() {
  const list_button = [
    {name: 'login', value : '/login'}
  ]
  return (
    <>
      <p className=" text-center text-3xl font-semibold">Template prototype</p>
      <p className='text-center p-5'>Page tổng hợp các template front end của nhóm kinh khủng</p>
      <p className='text-xl m-3 font-semibold'>Danh sách page</p>
      <div className="list-template grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
        {list_button.map((item)=>
          
          <Button variant="outlined" color="primary" href={`${item.value}`}>
            {item.name}
          </Button>
      )}
      </div>

    </>
  )
}

export default App

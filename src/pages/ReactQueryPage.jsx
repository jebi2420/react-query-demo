import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const ReactQueryPage = () => {

  const fetchPost=()=>{
    return axios.get('http://localhost:3004/posts')
  }

  const {isLoading, data, isError, error} = useQuery({
    queryKey:['posts'],
    queryFn: fetchPost,
    retry: 1,
    select:(data)=>{
      return data.data;
    },
    gcTime: 5000, // 5초
  })

  console.log("data: " +  isLoading + " " +  JSON.stringify(data, null, "\t")); 
  console.log("error: " + isError + " " + error)

  // 로딩 시에
  if(isLoading){
    return <h1>Loading...</h1> // 로딩 스피너 보여주거나 하면 됨
  }
  // 에러가 났을 때
  if(isError){
    return <h1>error!{error.messageg}</h1>
  }
  // 로딩, 에러 둘다 안났을 떄 data를 보여준다
  return (
    <div>
      ReactQueryPage
      {data.map((item)=>(
        <div>{item.title}</div> // data의 data에서 title만 뽑아서 보여준다
      ))}
    </div>
  )
}

export default ReactQueryPage
